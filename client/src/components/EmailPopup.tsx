import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, ArrowRight, Gift } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface EmailPopupProps {
  triggerType?: "exit" | "timed" | "scroll";
  delay?: number; // milliseconds for timed trigger
  scrollPercentage?: number; // percentage for scroll trigger
}

export default function EmailPopup({ 
  triggerType = "timed", 
  delay = 5000,
  scrollPercentage = 50 
}: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("🔥 Welcome to Hardwired Weekly!", {
        description: "Use code HRDLF26 for 15% off at HRDLF.com!",
        duration: 10000,
      });
      setEmail("");
      setIsOpen(false);
      // Store in localStorage to prevent showing again
      localStorage.setItem("hrdlf_popup_subscribed", "true");
    },
    onError: (error) => {
      if (error.message.includes("already subscribed")) {
        toast.info("Already subscribed", {
          description: "This email is already on our newsletter list.",
        });
        setIsOpen(false);
        localStorage.setItem("hrdlf_popup_subscribed", "true");
      } else {
        toast.error("Subscription failed", {
          description: "Please try again later.",
        });
      }
    },
  });

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribed = localStorage.getItem("hrdlf_popup_subscribed");
    const hasDismissed = localStorage.getItem("hrdlf_popup_dismissed");
    const dismissedTime = hasDismissed ? parseInt(hasDismissed) : 0;
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;

    // Don't show if subscribed or dismissed within last 24 hours
    if (hasSubscribed || (hasDismissed && dismissedTime > oneDayAgo)) {
      return;
    }

    if (triggerType === "timed" && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (triggerType === "exit" && !hasShown) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }

    if (triggerType === "scroll" && !hasShown) {
      const handleScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrolled >= scrollPercentage && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [triggerType, delay, scrollPercentage, hasShown]);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem("hrdlf_popup_dismissed", Date.now().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate({ email });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <Card 
        className="relative w-full max-w-md bg-background border-2 neon-border overflow-hidden"
        style={{ borderColor: 'oklch(0.75 0.25 240)' }}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/50 flex items-center justify-center hover:bg-card transition-colors z-10"
          aria-label="Close popup"
        >
          <X size={18} className="text-muted-foreground" />
        </button>

        {/* Decorative Header */}
        <div 
          className="h-2 w-full"
          style={{ background: 'linear-gradient(90deg, oklch(0.75 0.25 240), oklch(0.65 0.30 340), oklch(0.85 0.28 145))' }}
        />

        <CardContent className="p-8 pt-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center neon-glow"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240 / 0.2)',
                boxShadow: '0 0 30px oklch(0.75 0.25 240 / 0.5)'
              }}
            >
              <Gift size={32} style={{ color: 'oklch(0.75 0.25 240)' }} />
            </div>
          </div>

          {/* Headline */}
          <h2 
            className="text-2xl sm:text-3xl font-black text-center mb-2 neon-glow"
            style={{ color: 'oklch(0.75 0.25 240)' }}
          >
            GET 15% OFF
          </h2>
          <p className="text-lg font-bold text-center mb-2 text-foreground">
            + Exclusive Token Updates
          </p>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Join Hardwired Weekly for exclusive drops, HRDLF token news, and a discount code for HRDLF.com
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-card/50 border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-green transition-colors"
              style={{ borderColor: 'oklch(0.75 0.25 240 / 0.5)' }}
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={newsletterMutation.isPending}
              className="w-full font-bold py-3 neon-glow text-lg"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 20px oklch(0.75 0.25 240)'
              }}
            >
              {newsletterMutation.isPending ? 'JOINING...' : 'JOIN THE MOVEMENT'}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          {/* Footer */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam. Unsubscribe anytime.
          </p>

          {/* No Thanks Link */}
          <button
            onClick={handleDismiss}
            className="block w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors mt-4 underline"
          >
            No thanks, I'll pay full price
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
