export const PRODUCTS = {
  AGENT_MODE_COURSE: {
    name: "Agent Mode - Automate Your Business with AI",
    description: "Complete course teaching entrepreneurs how to leverage AI agents for apparel brands and mobile apps: inventory management, customer service, marketing automation, user acquisition, and operations.",
    price: 2700, // $27.00 in cents
    originalPrice: 5900, // $59.00 in cents
    currency: "usd",
    images: [
      "https://hrdlfcoin.com/images/agent-mode-course.jpg" // You can update this with actual image URL
    ] as string[],
    metadata: {
      type: "course",
      modules: "6",
      duration: "6 hours",
      category: "education"
    }
  }
} as const;

export type ProductKey = keyof typeof PRODUCTS;
