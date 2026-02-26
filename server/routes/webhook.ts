import { Router, Request, Response } from "express";
import Stripe from "stripe";

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

router.post("/webhook", async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    return res.status(400).send("Missing stripe-signature header");
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle test events
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return res.json({ verified: true });
  }

  // Handle different event types
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`[Webhook] Payment successful for session: ${session.id}`);
        console.log(`[Webhook] Product: ${session.metadata?.product_key}`);
        console.log(`[Webhook] Amount: $${(session.amount_total || 0) / 100}`);
        
        // TODO: Grant course access to customer
        // You can implement course access logic here
        // For example: send email with course login credentials
        
        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] PaymentIntent successful: ${paymentIntent.id}`);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] PaymentIntent failed: ${paymentIntent.id}`);
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err: any) {
    console.error(`[Webhook] Error processing event: ${err.message}`);
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

export default router;
