import { useState, useEffect } from "react";

const messages = [
  {
    text: "🔴 FIRST 100 WALLETS IN THE ARCHIVE PERMANENTLY → CLAIM YOURS NOW",
    href: "#buy",
    external: false,
  },
  {
    text: "⚡ COIN HOLDERS GET 48HR EARLY ACCESS ON EVERY HRDLF DROP → SEE WHAT THEY GET",
    href: "https://hardlifeapparelco.com/inner-circle/",
    external: true,
  },
  {
    text: "📦 HARDWIRED WEEKLY — FREE DROP ACCESS EVERY THURSDAY → GET HARDWIRED",
    href: "https://hardlifeapparelco.com/hardwired-weekly/",
    external: true,
  },
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem("ab_dismissed") === "true";
  });

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const msg = messages[currentIndex];

  return (
    <div
      className="w-full flex items-center justify-center relative"
      style={{
        backgroundColor: "#060606",
        height: "36px",
      }}
    >
      <a
        href={msg.href}
        target={msg.external ? "_blank" : undefined}
        rel={msg.external ? "noopener noreferrer" : undefined}
        className="text-xs sm:text-sm font-bold tracking-wide text-center px-8 transition-opacity duration-300"
        style={{
          color: "#FFD700",
          opacity: visible ? 1 : 0,
        }}
      >
        {msg.text}
      </a>
      <button
        onClick={() => {
          setDismissed(true);
          sessionStorage.setItem("ab_dismissed", "true");
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm hover:opacity-70 transition-opacity"
        style={{ color: "#FFD700" }}
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  );
}
