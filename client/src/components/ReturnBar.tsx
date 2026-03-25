import { useState } from "react";

export default function ReturnBar() {
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem("rb_dismissed") === "true";
  });

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center"
      style={{
        backgroundColor: "#060606",
        borderBottom: "1px solid #1a1a1a",
        height: "32px",
      }}
    >
      <a
        href="https://hardlifeapparelco.com"
        className="flex items-center gap-2 text-[11px] tracking-wide transition-colors hover:text-white"
        style={{ color: "#888" }}
      >
        <span style={{ color: "#c8251a" }}>&#8592;</span>
        <span>HARDLIFE APPAREL CO.</span>
        <span style={{ color: "#333" }}>&#183;</span>
        <span>Editorial</span>
        <span style={{ color: "#333" }}>&#183;</span>
        <span>Culture</span>
        <span style={{ color: "#333" }}>&#183;</span>
        <span style={{ color: "#c8251a" }}>Hardwired Weekly</span>
      </a>
      <button
        onClick={() => {
          setDismissed(true);
          sessionStorage.setItem("rb_dismissed", "true");
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm transition-opacity hover:opacity-70"
        style={{ color: "#555" }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
