import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, TrendingUp, Clock, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import Testimonials from "@/components/Testimonials";

export default function AgentMode() {
  const coursePrice = 27;
  const originalPrice = 59;
  const discount = Math.round(((originalPrice - coursePrice) / originalPrice) * 100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [location] = useLocation();

  // Check for success/cancel URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      toast.success('Payment successful! Check your email for course access.');
      // Clear URL parameters
      window.history.replaceState({}, '', '/agent-mode');
    } else if (params.get('canceled') === 'true') {
      toast.error('Payment canceled. Feel free to try again when ready!');
      window.history.replaceState({}, '', '/agent-mode');
    }
  }, []);

  const handleEnrollClick = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productKey: 'AGENT_MODE_COURSE',
        }),
      });

      const data = await response.json();

      if (data.url) {
        toast.info('Redirecting to secure checkout...');
        window.open(data.url, '_blank');
      } else {
        toast.error('Failed to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Agent Mode - Automate Your Apparel Brand with AI | HRDLF"
        description="Learn how to automate your apparel brand using AI agents. Master inventory management, customer service, marketing automation, and more. Limited time offer: $27 (was $59)."
        keywords="AI automation course, apparel brand automation, AI agents, business automation, HRDLF Agent Mode, Shopify automation, marketing AI"
        canonicalUrl="https://hrdlfcoin.com/agent-mode"
        breadcrumbs={[
          { name: "Home", url: "https://hrdlfcoin.com" },
          { name: "Agent Mode", url: "https://hrdlfcoin.com/agent-mode" }
        ]}
        additionalSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Agent Mode - AI Business Automation",
            "description": "The complete course for entrepreneurs who want to leverage AI agents to automate their apparel brand or mobile app business.",
            "provider": {
              "@type": "Organization",
              "name": "Hardlife Apparel Company LTD",
              "url": "https://hrdlfcoin.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "27",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "category": "Paid"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "duration": "PT6H"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        ]}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neon-blue/30">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/images/official-skull-logo.jpg" alt="HRDLF Logo" className="w-10 h-10 object-contain" />
              <span className="font-black text-xl" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
              ← Back to Home
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute inset-0 holo-gradient opacity-10"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-2 mb-6 rounded-full border-2 neon-border animate-pulse" style={{ borderColor: 'oklch(0.85 0.28 145)', backgroundColor: 'oklch(0.85 0.28 145 / 0.1)' }}>
              <span className="text-sm font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>LIMITED TIME OFFER • SAVE {discount}%</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
              <span className="neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>AGENT MODE</span>
              <br />
              <span className="text-foreground">Automate Your Business</span>
              <br />
              <span className="neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>WITH AI</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The complete course for entrepreneurs who want to leverage AI agents to automate their apparel brand or mobile app business—covering inventory, customer service, marketing, user engagement, and operations.
            </p>

            {/* Pricing Card */}
            <Card className="max-w-md mx-auto mb-8 bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl text-muted-foreground line-through">${originalPrice}</span>
                  <span className="text-6xl font-black neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>${coursePrice}</span>
                </div>
                <div className="inline-block px-4 py-1 rounded-full mb-6" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)' }}>
                  <span className="text-sm font-bold" style={{ color: 'oklch(0.85 0.28 145)' }}>You Save ${originalPrice - coursePrice} ({discount}% OFF)</span>
                </div>
                <Button 
                  size="lg" 
                  className="w-full text-xl font-black py-6 neon-glow group"
                  style={{ 
                    backgroundColor: 'oklch(0.85 0.28 145)',
                    color: 'oklch(0.05 0.01 240)',
                    boxShadow: '0 0 30px oklch(0.85 0.28 145)'
                  }}
                  onClick={handleEnrollClick}
                  disabled={isProcessing}
                >
                  {isProcessing ? 'PROCESSING...' : 'ENROLL NOW'}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-4">One-time payment • Lifetime access • 30-day money-back guarantee</p>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} style={{ color: 'oklch(0.75 0.25 240)' }} />
                <span>500+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} style={{ color: 'oklch(0.85 0.28 145)' }} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: 'oklch(0.65 0.30 340)' }} />
                <span>6 Hours Content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              WHAT YOU'LL MASTER
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap size={24} />,
                  title: "AI Agent Setup",
                  description: "Build custom AI agents for apparel brands and mobile apps without coding"
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "Inventory & Product Automation",
                  description: "Automate stock tracking, app store optimization, and supplier communication"
                },
                {
                  icon: <Users size={24} />,
                  title: "Customer Service & Support Bots",
                  description: "Deploy 24/7 AI support for e-commerce inquiries and app user support"
                },
                {
                  icon: <Sparkles size={24} />,
                  title: "Marketing & User Acquisition",
                  description: "Generate social content, email campaigns, app store assets, and ad copy with AI"
                },
                {
                  icon: <Award size={24} />,
                  title: "Analytics & Optimization",
                  description: "Use AI to analyze user behavior, predict churn, and optimize pricing/retention"
                },
                {
                  icon: <Clock size={24} />,
                  title: "Workflow Integration",
                  description: "Connect AI agents to Shopify, App Store Connect, Firebase, Instagram, and more"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-2 hover:border-neon-blue transition-all" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg neon-glow" style={{ backgroundColor: 'oklch(0.75 0.25 240 / 0.1)', color: 'oklch(0.75 0.25 240)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 relative bg-card/20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
              COURSE CURRICULUM
            </h2>

            <div className="space-y-4">
              {[
                {
                  module: "Module 1",
                  title: "Introduction to AI Agents for Business Automation",
                  lessons: 5,
                  duration: "45 min"
                },
                {
                  module: "Module 2",
                  title: "Setting Up Your AI Infrastructure",
                  lessons: 7,
                  duration: "1h 15min"
                },
                {
                  module: "Module 3",
                  title: "Automating Inventory, Products & App Store",
                  lessons: 6,
                  duration: "1h"
                },
                {
                  module: "Module 4",
                  title: "Customer Service & User Support Automation",
                  lessons: 8,
                  duration: "1h 20min"
                },
                {
                  module: "Module 5",
                  title: "AI-Powered Marketing & User Acquisition",
                  lessons: 9,
                  duration: "1h 30min"
                },
                {
                  module: "Module 6",
                  title: "Advanced Integrations & Scaling (Shopify, Firebase, APIs)",
                  lessons: 6,
                  duration: "1h 10min"
                }
              ].map((module, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-black mb-1" style={{ color: 'oklch(0.85 0.28 145)' }}>{module.module}</div>
                        <h3 className="font-black text-lg mb-1">{module.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <Check size={24} style={{ color: 'oklch(0.85 0.28 145)' }} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials 
        title="SUCCESS STORIES"
        subtitle="Hear from entrepreneurs who transformed their businesses with Agent Mode"
        testimonials={[
          {
            name: "Nina Patel",
            role: "Founder",
            company: "StyleHub Apparel",
            content: "Agent Mode completely transformed my business. I automated customer service, inventory tracking, and social media posting. Now I focus on design while AI handles operations. Revenue up 300%!",
            rating: 5
          },
          {
            name: "Jordan Lee",
            role: "Mobile App Developer",
            company: "FitTrack Pro",
            content: "The mobile app automation modules are gold. I set up AI agents for user onboarding, push notifications, and app store optimization. My retention rate doubled in 2 months.",
            rating: 5
          },
          {
            name: "Carlos Martinez",
            role: "E-commerce Owner",
            company: "Urban Threads",
            content: "Best $27 I ever spent. The course paid for itself in the first week. AI now handles my email marketing, product descriptions, and customer inquiries. I'm finally sleeping again!",
            rating: 5
          },
          {
            name: "Priya Singh",
            role: "Startup Founder",
            company: "WellnessApp",
            content: "As a solo founder, Agent Mode was a lifesaver. I built AI workflows for user support, content generation, and analytics reporting. It's like having a full team without the payroll.",
            rating: 5
          },
          {
            name: "Mike Thompson",
            role: "Brand Manager",
            company: "StreetCore",
            content: "The Shopify + Instagram automation alone saved me 20 hours a week. Now I use that time to scale. This course should cost $500, not $27. Absolute steal.",
            rating: 5
          },
          {
            name: "Lisa Chen",
            role: "App Entrepreneur",
            company: "MindfulMoments",
            content: "I was skeptical about AI automation, but Agent Mode made it so simple. No coding required. My app now has automated user engagement and I've cut support costs by 70%.",
            rating: 5
          }
        ]}
      />

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 holo-gradient opacity-10"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl sm:text-7xl font-black mb-8 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
              START AUTOMATING TODAY
            </h2>
            <p className="text-2xl mb-12 text-muted-foreground">
              Join 500+ entrepreneurs who are scaling their apparel brands and mobile apps with AI.
            </p>
            
            {/* Pricing Reminder */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl text-muted-foreground line-through">${originalPrice}</span>
              <span className="text-6xl font-black neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>${coursePrice}</span>
            </div>

            <Button 
              size="lg" 
              className="text-2xl font-black px-12 py-8 neon-glow group"
              style={{ 
                backgroundColor: 'oklch(0.85 0.28 145)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 40px oklch(0.85 0.28 145)'
              }}
              onClick={handleEnrollClick}
              disabled={isProcessing}
            >
              {isProcessing ? 'PROCESSING...' : 'ENROLL IN AGENT MODE'}
              <Zap className="ml-3 group-hover:scale-110 transition-transform" size={32} />
            </Button>

            <p className="text-sm text-muted-foreground mt-6 mono">
              30-day money-back guarantee • Lifetime access • Instant delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
