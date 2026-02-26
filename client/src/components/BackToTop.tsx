import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full shadow-lg neon-glow transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'oklch(0.75 0.25 240)',
            color: 'oklch(0.05 0.01 240)',
            boxShadow: '0 0 20px oklch(0.75 0.25 240), 0 4px 12px rgba(0,0,0,0.3)'
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </>
  );
}
