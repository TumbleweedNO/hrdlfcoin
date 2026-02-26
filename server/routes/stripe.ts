import { Router } from "express";
import Stripe from "stripe";
import { PRODUCTS } from "../../shared/products";
import webhookRouter from "./webhook";

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

// Create checkout session for Agent Mode course
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { productKey } = req.body;
    
    if (!productKey || !PRODUCTS[productKey as keyof typeof PRODUCTS]) {
      return res.status(400).json({ error: "Invalid product" });
    }

    const product = PRODUCTS[productKey as keyof typeof PRODUCTS];
    const origin = req.headers.origin || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
              images: product.images,
              metadata: product.metadata,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/agent-mode?success=true`,
      cancel_url: `${origin}/agent-mode?canceled=true`,
      allow_promotion_codes: true,
      metadata: {
        product_key: productKey,
        original_price: product.originalPrice.toString(),
      },
    });

    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
