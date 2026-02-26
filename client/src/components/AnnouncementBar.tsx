import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const SOLANA_MINT = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";

export function AnnouncementBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SOLANA_MINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border-b border-neon-blue/30 py-2 px-4">
      <div className="container mx-auto">
        {/* Line 1 - Company Info */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground mb-1">
          <span className="font-semibold text-foreground">HardLife Apparel Company LTD</span>
          <span className="mx-1">—</span>
          <span>official team behind HRDLF Coin (HRDLF).</span>
        </div>
        
        {/* Line 2 - Mint Address + Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-muted-foreground">Solana Mint:</span>
          <code className="bg-background/50 px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono text-neon-blue break-all">
            {SOLANA_MINT}
          </code>
          
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue transition-colors text-xs font-medium"
          >
            {copied ? (
              <>
                <Check size={12} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
          
          {/* Divider */}
          <span className="text-muted-foreground hidden sm:inline">•</span>
          
          {/* Links */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <a
              href="/verify"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neon-green/20 hover:bg-neon-green/30 text-neon-green transition-colors text-xs font-medium"
            >
              <span>Verify</span>
            </a>
            <a
              href={`https://moonshot.com/${SOLANA_MINT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink transition-colors text-xs font-medium"
            >
              <span>Moonshot</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
