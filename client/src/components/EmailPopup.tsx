import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface EmailPopupProps {
  triggerType?: "exit" | "timed" | "scroll";
  delay?: number;
  scrollPercentage?: number;
}

export default function EmailPopup({
  triggerType = "timed",
  delay = 8000,
  scrollPercentage = 50,
}: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const hasShownRef = useRef(false);

  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("🔥 Welcome to the founding circle!", {
        description: "Check your inbox for early access details.",
        duration: 10000,
      });
      setEmail("");
      setIsOpen(false);
      localStorage.setItem("hrdlf_popup_subscribed", "true");
    },
    onError: (error) => {
      if (error.message.includes("already subscribed")) {
        toast.info("Already subscribed", {
          description: "This email is already on our list.",
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
    const hasSubscribed = localStorage.getItem("hrdlf_popup_subscribed");
    const hasDismissed = localStorage.getItem("hrdlf_popup_dismissed");
    const dismissedTime = hasDismissed ? parseInt(hasDismissed) : 0;
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;

    if (hasSubscribed || (hasDismissed && dismissedTime > oneDayAgo)) {
      return;
    }

    const show = () => {
      if (hasShownRef.current) return;
      hasShownRef.current = true;
      setIsOpen(true);
    };

    // Timer trigger
    const timer = setTimeout(show, delay);

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // Scroll trigger (if configured)
    const handleScroll = () => {
      if (triggerType === "scroll") {
        const scrolled =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        if (scrolled >= scrollPercentage) show();
      }
    };
    if (triggerType === "scroll") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay, triggerType, scrollPercentage]);

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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.80)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div
        className="w-full max-w-md p-8 relative"
        style={{
          backgroundColor: "#060606",
          border: "1px solid #00D4FF",
        }}
      >
        {/* Headline */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "22px",
            fontWeight: 900,
            color: "#FFFFFF",
          }}
        >
          FOUNDING MEMBERS GET MORE THAN EVERYONE ELSE.
        </h2>

        {/* Body */}
        <p
          className="text-center mb-6"
          style={{ fontSize: "13px", color: "#AAAAAA", lineHeight: 1.6 }}
        >
          The first 100 coin holders go in The Archive permanently. They get
          48-hour early access on every HRDLF drop, priority on limited
          editions, and insider updates before anyone else. This isn't a
          newsletter — it's a head start.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 text-sm focus:outline-none"
            style={{
              backgroundColor: "#111111",
              border: "1px solid #333333",
              color: "#FFFFFF",
            }}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={newsletterMutation.isPending}
            className="w-full font-black py-3 text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#FF006E",
              color: "#FFFFFF",
            }}
          >
            {newsletterMutation.isPending
              ? "JOINING..."
              : "I'M IN — SEND MY EARLY ACCESS"}
            {!newsletterMutation.isPending && <ArrowRight size={16} />}
          </button>
        </form>

        {/* Dismiss link */}
        <button
          onClick={handleDismiss}
          className="block w-full text-center mt-5 transition-opacity hover:opacity-70"
          style={{ fontSize: "11px", color: "#666666" }}
        >
          No thanks, I'll find out when everyone else does.
        </button>
      </div>
    </div>
  );
}
