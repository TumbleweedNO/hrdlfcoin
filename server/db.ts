import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, newsletterSubscribers, NewsletterSubscriber } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Newsletter subscriber queries
export async function addNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot add newsletter subscriber: database not available");
    return null;
  }

  try {
    await db.insert(newsletterSubscribers).values({
      email: email.toLowerCase().trim(),
    });

    // Fetch the newly created subscriber
    const result = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email.toLowerCase().trim()))
      .limit(1);

    return result.length > 0 ? result[0] : null;
  } catch (error: any) {
    // Check for duplicate email error
    if (error.code === 'ER_DUP_ENTRY') {
      console.warn("[Database] Email already subscribed:", email);
      return null;
    }
    console.error("[Database] Failed to add newsletter subscriber:", error);
    throw error;
  }
}

export async function getAllNewsletterSubscribers() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get newsletter subscribers: database not available");
    return [];
  }

  return await db
    .select()
    .from(newsletterSubscribers)
    .where(eq(newsletterSubscribers.isActive, "active"));
}

// Beehiiv API integration
export async function syncSubscriberToBeehiiv(email: string) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.warn('[Beehiiv] Credentials not configured');
    return { success: false, error: 'Beehiiv not configured' };
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          send_welcome_email: false,
          utm_source: 'hrdlfcoin_landing',
          reactivate_existing: false,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Beehiiv] API error:', response.status, errorText);
      return { success: false, error: `Beehiiv API error: ${response.status}` };
    }

    const data = await response.json();
    console.log('[Beehiiv] Successfully synced subscriber:', data.data?.id);
    return { success: true, data: data.data };
  } catch (error) {
    console.error('[Beehiiv] Failed to sync subscriber:', error);
    return { success: false, error: String(error) };
  }
}
