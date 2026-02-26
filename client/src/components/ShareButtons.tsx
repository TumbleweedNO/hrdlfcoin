import { Share2, Copy, Check, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface ShareButtonsProps {
  variant?: "hero" | "compact";
}

export default function ShareButtons({ variant = "hero" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://hrdlfcoin.com";
  const shareText = "Just discovered $HRDLF 🔥 The crypto token backed by real streetwear brand @HardLifeApparel. Own a piece of the Hardlife movement!";
  const hashtags = "HRDLF,Solana,Crypto,Streetwear";

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(hashtags)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleTelegramShare = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank', 'width=550,height=420');
  };

  const handleDiscordShare = () => {
    // Discord doesn't have a direct share URL, so we copy a formatted message
    const discordMessage = `${shareText}\n\n${shareUrl}\n\n#HRDLF #Solana #Crypto #Streetwear`;
    navigator.clipboard.writeText(discordMessage).then(() => {
      toast.success("Message copied! Paste it in Discord to share.");
    }).catch(() => {
      toast.error("Failed to copy message");
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={handleTwitterShare}
          className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
          title="Share on Twitter/X"
        >
          <Share2 size={16} />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleTelegramShare}
          className="border-neon-blue text-neon-blue hover:bg-neon-blue/10"
          title="Share on Telegram"
        >
          <Send size={16} />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDiscordShare}
          className="border-neon-pink text-neon-pink hover:bg-neon-pink/10"
          title="Copy for Discord"
        >
          <MessageCircle size={16} />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          className="border-neon-green text-neon-green hover:bg-neon-green/10"
          title="Copy link"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6">
      <p className="text-sm text-muted-foreground font-semibold">SPREAD THE WORD</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={handleTwitterShare}
          className="border-2 font-bold transition-all group"
          style={{
            borderColor: 'oklch(0.75 0.25 240)',
            color: 'oklch(0.75 0.25 240)',
          }}
        >
          <Share2 size={20} className="mr-2 group-hover:scale-110 transition-transform" />
          Twitter/X
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleTelegramShare}
          className="border-2 font-bold transition-all group"
          style={{
            borderColor: 'oklch(0.75 0.25 240)',
            color: 'oklch(0.75 0.25 240)',
          }}
        >
          <Send size={20} className="mr-2 group-hover:scale-110 transition-transform" />
          Telegram
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleDiscordShare}
          className="border-2 font-bold transition-all group"
          style={{
            borderColor: 'oklch(0.65 0.30 340)',
            color: 'oklch(0.65 0.30 340)',
          }}
        >
          <MessageCircle size={20} className="mr-2 group-hover:scale-110 transition-transform" />
          Discord
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleCopyLink}
          className="border-2 font-bold transition-all group"
          style={{
            borderColor: 'oklch(0.85 0.28 145)',
            color: 'oklch(0.85 0.28 145)',
          }}
        >
          {copied ? (
            <>
              <Check size={20} className="mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
