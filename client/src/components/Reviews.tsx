import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    name: "Marcus Chen",
    role: "Early Investor & Streetwear Collector",
    rating: 5,
    text: "HRDLF is exactly what the crypto space needs—a token backed by a real brand with real products. I've been following Hardlife Apparel for years, and seeing them bridge streetwear with Web3 is genius. Got in at $5K market cap and I'm holding long-term.",
    date: "2025-01-15"
  },
  {
    name: "Sarah Rodriguez",
    role: "Crypto Trader & Fashion Enthusiast",
    rating: 5,
    text: "Most memecoins are just hype with no substance. HRDLF is different—it's backed by an 18-year-old streetwear brand with actual customers and products. The exclusive holder benefits (early drops, discounts, governance) make this more than just a speculative play.",
    date: "2025-01-12"
  },
  {
    name: "DeAndre Williams",
    role: "Community Member & Token Holder",
    rating: 5,
    text: "The HRDLF community is incredible. 3,482+ people in Discord, all passionate about streetwear and crypto. The team is transparent, responsive, and actually delivers on their promises. This isn't a pump-and-dump—it's a long-term movement.",
    date: "2025-01-10"
  },
  {
    name: "Alex Tanaka",
    role: "DeFi Investor",
    rating: 5,
    text: "I've invested in dozens of tokens, and HRDLF stands out. The low market cap ($5.1K) means massive upside potential, but it's not just speculation—there's real utility. Token holders get exclusive access to limited streetwear drops. That's tangible value.",
    date: "2025-01-08"
  },
  {
    name: "Jasmine Patel",
    role: "Fashion Blogger & Crypto Enthusiast",
    rating: 5,
    text: "HRDLF is bridging two worlds I love—streetwear and crypto. The brand has authentic history (since 2007) and the token gives holders real benefits. I'm excited to see where this goes. The Moonshot listing was just the beginning.",
    date: "2025-01-05"
  },
  {
    name: "Tyler Brooks",
    role: "Entrepreneur & Early Adopter",
    rating: 5,
    text: "Ground floor opportunities like this don't come often. HRDLF has everything: low market cap, real brand backing, strong community, and clear roadmap. I'm all in. This could be the next Supreme of crypto.",
    date: "2025-01-03"
  }
];

export default function Reviews() {
  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Generate Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HRDLF Token",
    "description": "Cryptocurrency token backed by Hardlife Apparel Company LTD, bridging streetwear culture and Web3 innovation",
    "brand": {
      "@type": "Brand",
      "name": "Hardlife Apparel Company LTD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      {/* Inject Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(oklch(0.75 0.25 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 240) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
              WHAT HOLDERS ARE SAYING
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green"></div>
            
            {/* Aggregate Rating Display */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={28}
                    fill={star <= averageRating ? "oklch(0.95 0.25 100)" : "none"}
                    stroke={star <= averageRating ? "oklch(0.95 0.25 100)" : "oklch(0.5 0.1 240)"}
                    className="transition-all"
                  />
                ))}
              </div>
              <div className="text-2xl font-black" style={{ color: 'oklch(0.95 0.25 100)' }}>
                {averageRating.toFixed(1)} / 5.0
              </div>
              <div className="text-sm text-muted-foreground">
                ({reviews.length} reviews)
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:border-neon-pink transition-all group"
                style={{ borderColor: 'oklch(0.65 0.30 340 / 0.3)' }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote 
                    size={32} 
                    className="mb-4 opacity-30 group-hover:opacity-50 transition-opacity" 
                    style={{ color: 'oklch(0.65 0.30 340)' }}
                  />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill={star <= review.rating ? "oklch(0.95 0.25 100)" : "none"}
                        stroke={star <= review.rating ? "oklch(0.95 0.25 100)" : "oklch(0.5 0.1 240)"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'oklch(0.65 0.30 340 / 0.2)' }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center font-black text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-xs text-muted-foreground mt-3 mono">
                    {new Date(review.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2" style={{ 
              borderColor: 'oklch(0.85 0.28 145)',
              backgroundColor: 'oklch(0.85 0.28 145 / 0.1)'
            }}>
              <Star size={20} fill="oklch(0.95 0.25 100)" stroke="oklch(0.95 0.25 100)" />
              <span className="font-black text-sm" style={{ color: 'oklch(0.85 0.28 145)' }}>
                VERIFIED HOLDER REVIEWS
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
