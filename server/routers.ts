import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .mutation(async ({ input }) => {
        const { addNewsletterSubscriber, syncSubscriberToBeehiiv } = await import("./db");
        
        // Add to local database
        const subscriber = await addNewsletterSubscriber(input.email);
        
        if (!subscriber) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "This email is already subscribed to our newsletter.",
          });
        }
        
        // Sync to Beehiiv (non-blocking, log errors but don't fail the request)
        // Beehiiv will handle the welcome email automation
        syncSubscriberToBeehiiv(input.email).catch(error => {
          console.error('[Newsletter] Failed to sync to Beehiiv:', error);
        });
        
        return {
          success: true,
          message: "Successfully subscribed to Hardwired Weekly!",
        };
      }),
    
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only allow admins to view subscriber list
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only admins can view the subscriber list.",
        });
      }
      
      const { getAllNewsletterSubscribers } = await import("./db");
      return await getAllNewsletterSubscribers();
    }),
  }),
});

export type AppRouter = typeof appRouter;
