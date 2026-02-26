import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({ testimonials, title, subtitle }: TestimonialsProps) {
  return (
    <section className="py-20 px-4">
      <div className="container">
        {title && (
          <h2 className="text-4xl sm:text-6xl font-black text-center mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-2 hover:border-neon-blue transition-all"
              style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill="oklch(0.85 0.28 145)" 
                      stroke="oklch(0.85 0.28 145)"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{ 
                        backgroundColor: 'oklch(0.75 0.25 240 / 0.2)',
                        color: 'oklch(0.75 0.25 240)'
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
