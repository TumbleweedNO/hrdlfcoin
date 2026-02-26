/* Cyberpunk Street Fusion - HRDLF Token Landing Page
 * Layered, atmospheric design with neon accents
 * Futuristic HUD-inspired interface elements
 * Glowing interactions and holographic effects
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Rocket, Users, TrendingUp, Shield, Zap, ExternalLink, Copy, FileText, DollarSign, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import SEO from "@/components/SEO";
import BackToTop from "@/components/BackToTop";
import MobileMenu from "@/components/MobileMenu";
import PriceTicker from "@/components/PriceTicker";
import PriceDisplay from "@/components/PriceDisplay";
import ShareButtons from "@/components/ShareButtons";
import Testimonials from "@/components/Testimonials";
import LiveChat from "@/components/LiveChat";
import TrustBadges from "@/components/TrustBadges";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import EmailPopup from "@/components/EmailPopup";

export default function Home() {
  const [glitchText, setGlitchText] = useState("HRDLF");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  
  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("🔥 Welcome to Hardwired Weekly!", {
        description: "Use code HRDLF26 for 15% off at HRDLF.com!",
        duration: 10000,
      });
      setNewsletterEmail("");
    },
    onError: (error) => {
      if (error.message.includes("already subscribed")) {
        toast.info("Already subscribed", {
          description: "This email is already on our newsletter list.",
        });
      } else {
        toast.error("Subscription failed", {
          description: "Please try again later.",
        });
      }
    },
  });
  
  // HRDLF Token Contract Address
  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";
  const moonshotLink = "https://moonshot.com";
  const solscanLink = "https://solscan.io/token/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";

  // Glitch effect on title
  useEffect(() => {
    const glitchChars = "HRDLF█▓▒░";
    let interval: NodeJS.Timeout;
    
    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchText(prev => 
          prev.split("").map((char, index) => {
            if (index < iterations) return "HRDLF"[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }).join("")
        );
        
        if (iterations >= 5) {
          clearInterval(interval);
          setGlitchText("HRDLF");
        }
        iterations += 1/3;
      }, 50);
    };

    const glitchTimer = setInterval(startGlitch, 8000);
    return () => {
      clearInterval(glitchTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-neon-blue/30" aria-label="Main navigation">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/official-skull-logo.jpg" alt="HRDLF Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-black tracking-wider" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <a href="#about" className="text-sm font-semibold hover:text-neon-blue transition-colors hidden sm:block">ABOUT</a>
            <a href="#tokenomics" className="text-sm font-semibold hover:text-neon-pink transition-colors hidden sm:block">TOKENOMICS</a>
            <a href="#community" className="text-sm font-semibold hover:text-neon-green transition-colors hidden sm:block">COMMUNITY</a>
            <a href="/verify" className="text-sm font-semibold hover:text-neon-green transition-colors hidden sm:block">VERIFY</a>
            <a href="/faq" className="text-sm font-semibold hover:text-neon-blue transition-colors hidden sm:block">FAQ</a>
            <a href="/HRDLF_Whitepaper.md" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-neon-yellow transition-colors hidden md:block">WHITEPAPER</a>
            <Button 
              size="sm" 
              className="font-bold neon-glow hidden sm:flex"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 20px oklch(0.75 0.25 240)'
              }}
              onClick={() => window.open(moonshotLink, '_blank')}
            >
              BUY NOW
            </Button>
            
            {/* Mobile Menu */}
            <MobileMenu moonshotLink={moonshotLink} />
          </div>
        </div>
      </nav>
      
      {/* Announcement Bar */}
      <div className="fixed top-[72px] left-0 right-0 z-40">
        <AnnouncementBar />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-bg-revised.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(oklch(0.75 0.25 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 240) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>

        <div className="container relative z-10 text-center px-4 pt-44 sm:pt-40 md:pt-32 pb-20">
          {/* Glitch Title */}
          <div className="mb-6">
            <h1 
              className="text-7xl sm:text-8xl md:text-9xl font-black mb-4 neon-glow"
              style={{ color: 'oklch(0.75 0.25 240)' }}
            >
              {glitchText}
            </h1>
            <div className="h-1 w-64 mx-auto holo-gradient"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Own a Piece of the <br />
            <span className="neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>Hardlife Movement</span>
          </h2>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
            The intersection of streetwear culture and crypto innovation. 
            Join the underground revolution where fashion meets blockchain.
          </p>

          {/* Live Token Stats */}
          <PriceTicker />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg font-black px-8 py-6 neon-glow group relative overflow-hidden"
              style={{ 
                backgroundColor: 'oklch(0.80 0.30 90)',
                color: 'oklch(0.15 0.01 90)',
                boxShadow: '0 0 30px oklch(0.80 0.30 90)'
              }}
              onClick={() => window.open(moonshotLink, '_blank')}
            >
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-bl-lg animate-pulse">LIVE</span>
              BUY ON MOONSHOT
              <Rocket className="ml-2 group-hover:translate-y-[-2px] transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              className="text-lg font-black px-8 py-6 neon-glow group"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 30px oklch(0.75 0.25 240)'
              }}
              onClick={() => window.open(`https://dexscreener.com/solana/${contractAddress}`, '_blank')}
            >
              VIEW ON DEXSCREENER
              <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg font-bold px-8 py-6 border-2 neon-border hidden lg:flex"
              style={{ 
                borderColor: 'oklch(0.65 0.30 340)',
                color: 'oklch(0.65 0.30 340)'
              }}
              onClick={() => window.open(solscanLink, '_blank')}
            >
              VIEW ON SOLSCAN
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a 
              href="https://apps.apple.com/us/app/moonshot/id6503993131"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img 
                src="/images/app-store-badge.png" 
                alt="Download Moonshot on App Store" 
                className="h-10 sm:h-12 object-contain"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=money.moonshot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img 
                src="/images/google-play-badge.png" 
                alt="Get Moonshot on Google Play" 
                className="h-10 sm:h-12 object-contain"
              />
            </a>
          </div>

          {/* Share Buttons */}
          <ShareButtons variant="hero" />

          {/* Ecosystem CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="/join">
              <Button 
                size="lg" 
                className="text-lg font-black px-8 py-6 neon-glow group"
                style={{ 
                  backgroundColor: 'oklch(0.85 0.28 145)',
                  color: 'oklch(0.05 0.01 240)',
                  boxShadow: '0 0 30px oklch(0.85 0.28 145)'
                }}
              >
                JOIN THE MOVEMENT
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg font-bold px-8 py-6 border-2 neon-border group"
              style={{ 
                borderColor: 'oklch(0.65 0.30 340)',
                color: 'oklch(0.65 0.30 340)'
              }}
              onClick={() => window.open('https://hrdlf.com', '_blank')}
            >
              GET YOUR GEAR
              <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={20} />
            </Button>

          </div>

          {/* Token Visual */}
          <div className="mt-16">
            <img 
              src="/images/hrdlf-coin-render.webp" 
              alt="HRDLF Token" 
              className="w-80 h-80 mx-auto animate-float"
              style={{
                filter: 'drop-shadow(0 0 50px oklch(0.75 0.25 240)) drop-shadow(0 0 80px oklch(0.65 0.30 340))',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* INVESTOR PITCH SECTION - Prominent Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-blue/20 to-neon-green/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, oklch(0.65 0.30 340 / 0.1) 25%, transparent 25%), linear-gradient(-45deg, oklch(0.75 0.25 240 / 0.1) 25%, transparent 25%)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Investor Card */}
            <Card className="bg-card/80 backdrop-blur-xl border-4 overflow-hidden relative" style={{ 
              borderColor: 'oklch(0.85 0.28 145)',
              boxShadow: '0 0 60px oklch(0.85 0.28 145 / 0.4), 0 0 120px oklch(0.65 0.30 340 / 0.2)'
            }}>
              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-50" style={{
                background: 'linear-gradient(90deg, oklch(0.85 0.28 145), oklch(0.75 0.25 240), oklch(0.65 0.30 340), oklch(0.85 0.28 145))',
                backgroundSize: '300% 100%',
                animation: 'gradient-shift 3s ease infinite',
                filter: 'blur(20px)'
              }}></div>

              <CardContent className="p-8 sm:p-12 relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 animate-pulse" style={{ 
                    borderColor: 'oklch(0.85 0.28 145)', 
                    backgroundColor: 'oklch(0.85 0.28 145 / 0.2)'
                  }}>
                    <DollarSign size={18} style={{ color: 'oklch(0.85 0.28 145)' }} />
                    <span className="text-sm font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>🚀 INVESTMENT OPPORTUNITY</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
                  JOIN THE MOVEMENT
                </h2>

                <p className="text-xl sm:text-2xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                  18 years of streetwear legacy meets blockchain innovation. 
                  <span className="font-bold" style={{ color: 'oklch(0.65 0.30 340)' }}> Be part of something bigger.</span>
                </p>

                {/* Key Stats */}
                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                  <div className="text-center p-6 rounded-xl bg-background/50 border-2" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.5)' }}>
                    <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>18</div>
                    <div className="text-sm font-bold text-muted-foreground">YEARS OF BRAND LEGACY</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-background/50 border-2" style={{ borderColor: 'oklch(0.65 0.30 340 / 0.5)' }}>
                    <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>4</div>
                    <div className="text-sm font-bold text-muted-foreground">CHARITABLE CAUSES</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-background/50 border-2" style={{ borderColor: 'oklch(0.85 0.28 145 / 0.5)' }}>
                    <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>$50M</div>
                    <div className="text-sm font-bold text-muted-foreground">VALUATION TARGET</div>
                  </div>
                </div>

                {/* Impact Pillars */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                    <Heart size={24} style={{ color: 'oklch(0.65 0.30 340)' }} />
                    <span className="text-sm font-bold">Childhood Hunger</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                    <Users size={24} style={{ color: 'oklch(0.75 0.25 240)' }} />
                    <span className="text-sm font-bold">Teen Homelessness</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                    <Shield size={24} style={{ color: 'oklch(0.85 0.28 145)' }} />
                    <span className="text-sm font-bold">Community Food Drives</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                    <Zap size={24} style={{ color: 'oklch(0.95 0.25 100)' }} />
                    <span className="text-sm font-bold">Skatepark Development</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="text-xl font-black px-10 py-8 neon-glow group relative overflow-hidden"
                    style={{ 
                      backgroundColor: 'oklch(0.85 0.28 145)',
                      color: 'oklch(0.05 0.01 145)',
                      boxShadow: '0 0 40px oklch(0.85 0.28 145)'
                    }}
                    onClick={() => window.open('/HRDLF_Investor_Pitch.pdf', '_blank')}
                  >
                    <FileText className="mr-3" size={24} />
                    VIEW INVESTOR PITCH
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg font-bold px-8 py-6 border-2 neon-border"
                    style={{ 
                      borderColor: 'oklch(0.75 0.25 240)',
                      color: 'oklch(0.75 0.25 240)'
                    }}
                    onClick={() => window.open('/HRDLF_Whitepaper.md', '_blank')}
                  >
                    <FileText className="mr-2" size={20} />
                    READ WHITEPAPER
                  </Button>
                </div>

                {/* Bottom Text */}
                <p className="text-center text-sm text-muted-foreground mt-8">
                  Every transaction feeds hungry children, houses homeless teens, and builds skateparks. 
                  <span className="font-bold" style={{ color: 'oklch(0.85 0.28 145)' }}> This is purpose-driven investing.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(oklch(0.75 0.25 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 240) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 mb-4 rounded-full border-2 neon-border" style={{ borderColor: 'oklch(0.85 0.28 145)', backgroundColor: 'oklch(0.85 0.28 145 / 0.1)' }}>
              <span className="text-sm font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>🔥 LIVE UPDATES</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              LATEST NEWS
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green"></div>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Moonshot Listing - LIVE! */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300 relative overflow-hidden" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold animate-pulse" style={{ backgroundColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.15 0.01 145)' }}>
                LIVE
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.65 0.30 340 / 0.2)' }}>
                    <Rocket size={24} style={{ color: 'oklch(0.65 0.30 340)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black" style={{ color: 'oklch(0.65 0.30 340)' }}>Live on Moonshot</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: 'oklch(0.65 0.30 340 / 0.2)', color: 'oklch(0.65 0.30 340)' }}>TRADING</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Buy HRDLF instantly on the Moonshot app. Download from App Store or Google Play.</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mono mb-2">
                      <span>📱 iOS & Android</span>
                      <span>•</span>
                      <span>Instant Purchase</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a 
                        href="https://moonshot.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold hover:underline flex items-center gap-1"
                        style={{ color: 'oklch(0.65 0.30 340)' }}
                      >
                        Get the App <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon');
                          toast.success('Contract address copied!');
                        }}
                        className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-md transition-all hover:scale-105"
                        style={{ 
                          backgroundColor: 'oklch(0.65 0.30 340 / 0.2)', 
                          color: 'oklch(0.65 0.30 340)',
                          border: '1px solid oklch(0.65 0.30 340 / 0.5)'
                        }}
                      >
                        <Copy size={12} /> Copy Contract
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CoinMarketCap Submission */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300 overflow-hidden" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.75 0.25 240 / 0.2)' }}>
                    <TrendingUp size={24} style={{ color: 'oklch(0.75 0.25 240)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg font-black" style={{ color: 'oklch(0.75 0.25 240)' }}>CoinMarketCap Listing</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-bold flex-shrink-0" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)', color: 'oklch(0.85 0.28 145)' }}>VERIFIED</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Official submission completed and verified. Now in review queue.</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mono flex-wrap mb-3">
                      <span>📅 Jan 2, 2025</span>
                      <span>•</span>
                      <span>Ticket #1317126</span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon');
                        toast.success('Contract address copied!');
                      }}
                      className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-md transition-all hover:scale-105"
                      style={{ 
                        backgroundColor: 'oklch(0.75 0.25 240 / 0.2)', 
                        color: 'oklch(0.75 0.25 240)',
                        border: '1px solid oklch(0.75 0.25 240 / 0.5)'
                      }}
                    >
                      <Copy size={12} /> Copy Contract
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CoinGecko Submission */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)' }}>
                    <TrendingUp size={24} style={{ color: 'oklch(0.85 0.28 145)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black" style={{ color: 'oklch(0.85 0.28 145)' }}>CoinGecko Listing</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)', color: 'oklch(0.85 0.28 145)' }}>SUBMITTED</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Official submission to CoinGecko completed. Review in progress.</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mono mb-2">
                      <span>📅 Jan 3, 2025</span>
                      <span>•</span>
                      <span>Request #CL0301260025</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a 
                        href="https://x.com/hardlifeapparel/status/2007437514726900112" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold hover:underline flex items-center gap-1"
                        style={{ color: 'oklch(0.85 0.28 145)' }}
                      >
                        View Verification Tweet <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon');
                          toast.success('Contract address copied!');
                        }}
                        className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-md transition-all hover:scale-105"
                        style={{ 
                          backgroundColor: 'oklch(0.85 0.28 145 / 0.2)', 
                          color: 'oklch(0.85 0.28 145)',
                          border: '1px solid oklch(0.85 0.28 145 / 0.5)'
                        }}
                      >
                        <Copy size={12} /> Copy Contract
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Platform Launch */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.65 0.30 340 / 0.2)' }}>
                    <Rocket size={24} style={{ color: 'oklch(0.65 0.30 340)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black" style={{ color: 'oklch(0.65 0.30 340)' }}>Social Media Launch</h3>
                      <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: 'oklch(0.65 0.30 340 / 0.2)', color: 'oklch(0.65 0.30 340)' }}>LIVE</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Official launch across Twitter/X, TikTok, and Instagram with full campaign rollout.</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a 
                        href="https://x.com/hardlifeapparel/status/2007118798483341531" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-bold hover:underline flex items-center gap-1"
                        style={{ color: 'oklch(0.65 0.30 340)' }}
                      >
                        View Launch Tweet <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon');
                          toast.success('Contract address copied!');
                        }}
                        className="text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-md transition-all hover:scale-105"
                        style={{ 
                          backgroundColor: 'oklch(0.65 0.30 340 / 0.2)', 
                          color: 'oklch(0.65 0.30 340)',
                          border: '1px solid oklch(0.65 0.30 340 / 0.5)'
                        }}
                      >
                        <Copy size={12} /> Copy Contract
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Whitepaper Published */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)' }}>
                    <Shield size={24} style={{ color: 'oklch(0.85 0.28 145)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black" style={{ color: 'oklch(0.85 0.28 145)' }}>Official Whitepaper</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Comprehensive documentation covering tokenomics, roadmap, and charitable mission.</p>
                    <a 
                      href="/HRDLF_Whitepaper.md" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold hover:underline flex items-center gap-1"
                      style={{ color: 'oklch(0.85 0.28 145)' }}
                    >
                      Read Whitepaper <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Verification Page */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform duration-300" style={{ borderColor: 'oklch(0.95 0.25 100)' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.95 0.25 100 / 0.2)' }}>
                    <Users size={24} style={{ color: 'oklch(0.95 0.25 100)' }} className="neon-glow" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-black" style={{ color: 'oklch(0.95 0.25 100)' }}>Verification Center</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Complete transparency with blockchain verification and business documentation.</p>
                    <a 
                      href="/verify" 
                      className="text-xs font-bold hover:underline flex items-center gap-1"
                      style={{ color: 'oklch(0.95 0.25 100)' }}
                    >
                      View Verification <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stay Updated CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Stay informed about HRDLF developments</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline"
                size="lg"
                className="font-bold border-2 neon-border"
                style={{ borderColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.75 0.25 240)' }}
                onClick={() => window.open('https://x.com/hardlifeapparel', '_blank')}
              >
                Follow on Twitter/X
                <ExternalLink className="ml-2" size={16} />
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
              THE MOVEMENT
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="/images/streetwear-lifestyle.jpg" 
                alt="Hardlife Streetwear" 
                className="rounded-lg neon-border"
                style={{ 
                  borderWidth: '3px',
                  borderColor: 'oklch(0.75 0.25 240)',
                  boxShadow: '0 0 40px oklch(0.75 0.25 240)'
                }}
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                More Than Just a Token
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                HRDLF isn't just another memecoin—it's the digital extension of Hardlife Apparel Company LTD, 
                a streetwear brand that represents authenticity, resilience, and urban culture. When you hold HRDLF, 
                you're not just investing in crypto—you're joining a lifestyle movement.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With a market cap of only $5.1K, you're getting in at the absolute ground floor. 
                This is your chance to be part of something before it explodes.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Rocket className="text-neon-yellow" size={24} />
                  <span className="font-bold">Early Entry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-neon-green" size={24} />
                  <span className="font-bold">Brand Backed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-pink/5 to-background"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
                THE FOUNDER'S JOURNEY
              </h2>
              <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden neon-border" style={{ borderWidth: '3px', borderColor: 'oklch(0.65 0.30 340)' }}>
                    <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-black mb-2" style={{ color: 'oklch(0.65 0.30 340)' }}>BROOKS</div>
                        <div className="text-sm font-bold text-muted-foreground">FOUNDER & CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold mb-4">Brooks</h3>
                <p className="text-sm font-bold text-neon-pink mb-4">Founder & CEO | Creative Director</p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  An American entrepreneur with 18 years in streetwear and skate culture, Brooks launched 
                  Hardlife Apparel in <strong>Philadelphia, PA in 2007</strong>, capturing the raw energy of East 
                  Coast skate culture. After building the brand through <strong>Scottsdale, Arizona</strong>, 
                  he expanded operations to <strong>southern Norway</strong>, bringing a global perspective to the 
                  Hardlife movement.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Today, Brooks directs the entire HRDLF ecosystem: <strong>HRDLFCOIN</strong> (crypto token), 
                  <strong>HRDLF.com</strong> (apparel store), with <strong>Hardwired Weekly</strong> (newsletter) and 
                  <strong>Agent Mode</strong> (AI automation course) coming soon. HRDLF Token represents the evolution 
                  of that vision—merging authentic streetwear culture with Web3 innovation.
                </p>
                <blockquote className="border-l-4 pl-4 italic text-muted-foreground" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
                  "We started in Philly basements and skate parks. Now we're building the future of streetwear 
                  on the blockchain. The Hardlife never stops evolving."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Verification Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
                VERIFY THE TOKEN
              </h2>
              <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-blue via-neon-green to-neon-yellow"></div>
              <p className="text-lg text-muted-foreground mt-6">
                Transparency is everything. Verify our token contract and business registration.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.5)' }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>Token Contract</h3>
                  <p className="text-sm text-muted-foreground mb-4">Solana Blockchain</p>
                  <div className="bg-background/50 p-4 rounded-lg mb-4 font-mono text-xs break-all">
                    {contractAddress}
                  </div>
                  <Button
                    className="w-full font-bold"
                    style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}
                    onClick={() => window.open(solscanLink, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View on Solscan
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.85 0.28 145 / 0.5)' }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(0.85 0.28 145)' }}>Company Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-muted-foreground">Legal Entity</div>
                      <div className="font-bold">Hardlife Apparel Company LTD</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Founded</div>
                      <div className="font-bold">Philadelphia, PA, USA (2007)</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Current HQ</div>
                      <div className="font-bold">Southern Norway</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Registration</div>
                      <div className="font-bold mono text-xs">NO-[Registration Number]</div>
                      <div className="text-xs text-muted-foreground mt-1">Norwegian Business Registry</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                All information is verifiable and transparent. We operate with full legal compliance.
              </p>
              <a href="mailto:info@hardlifeapparelco.com" className="text-neon-blue hover:underline font-semibold">
                info@hardlifeapparelco.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why HRDLF Section */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/crypto-trading.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
              WHY HRDLF?
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp size={40} />,
                title: "Ground Floor Opportunity",
                description: "Market cap under $6K means massive growth potential. Get in before the moonshot.",
                color: "oklch(0.85 0.28 145)"
              },
              {
                icon: <Users size={40} />,
                title: "Real Brand Behind It",
                description: "Backed by Hardlife Apparel—an actual streetwear company with real products and customers.",
                color: "oklch(0.75 0.25 240)"
              },
              {
                icon: <Zap size={40} />,
                title: "Moonshot Platform",
                description: "Listed on Moonshot.com, the premier platform for discovering the next big memecoin.",
                color: "oklch(0.65 0.30 340)"
              },
              {
                icon: <Shield size={40} />,
                title: "Community Driven",
                description: "Join a movement of streetwear enthusiasts and crypto believers building something real.",
                color: "oklch(0.95 0.25 100)"
              },
              {
                icon: <Rocket size={40} />,
                title: "Exclusive Access",
                description: "Token holders get VIP access to limited drops, exclusive designs, and brand events.",
                color: "oklch(0.75 0.25 240)"
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Lifestyle Investment",
                description: "This isn't just money—it's a statement. Own a piece of the culture.",
                color: "oklch(0.65 0.30 340)"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 hover:scale-105 transition-transform duration-300 neon-border"
                style={{ borderColor: feature.color }}
              >
                <CardContent className="p-8">
                  <div 
                    className="mb-4 neon-glow"
                    style={{ color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 relative scanlines">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              TOKENOMICS
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-pink via-neon-yellow to-neon-blue"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-8 sm:p-12">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="mono text-sm text-muted-foreground mb-2">TOKEN SYMBOL</div>
                    <div className="text-4xl font-black neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="mono text-sm text-muted-foreground mb-2">BLOCKCHAIN</div>
                    <div className="text-4xl font-black neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>SOLANA</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="mono text-sm text-muted-foreground mb-2">CURRENT PRICE</div>
                    <div className="text-3xl font-black neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
                      <PriceDisplay type="price" />
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="mono text-sm text-muted-foreground mb-2">MARKET CAP</div>
                    <div className="text-3xl font-black neon-glow" style={{ color: 'oklch(0.95 0.25 100)' }}>
                      <PriceDisplay type="marketcap" />
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-lg bg-background/50 border-2" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.65 0.30 340)' }}></div>
                    <span className="mono text-sm font-bold" style={{ color: 'oklch(0.65 0.30 340)' }}>CONTRACT ADDRESS</span>
                  </div>
                  <div className="bg-background/80 p-4 rounded-md border border-border mb-4">
                    <code className="text-xs break-all text-muted-foreground">{contractAddress}</code>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                    onClick={() => window.open(solscanLink, '_blank')}
                  >
                    View on Solscan
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/community-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
              JOIN THE COMMUNITY
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-blue via-neon-green to-neon-yellow"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl mb-12 leading-relaxed">
              Be part of the underground movement where streetwear meets crypto. 
              Connect with like-minded individuals who believe in the Hardlife vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border w-full sm:w-auto" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
                <CardContent className="p-8">
                  <Users size={48} className="mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }} />
                  <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>84+</div>
                  <div className="text-sm text-muted-foreground mono">TOKEN HOLDERS</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border w-full sm:w-auto" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
                <CardContent className="p-8">
                  <TrendingUp size={48} className="mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }} />
                  <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>210+</div>
                  <div className="text-sm text-muted-foreground mono">TRANSACTIONS</div>
                </CardContent>
              </Card>
            </div>

            {/* Email Capture Form */}
            <div className="mt-12 mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border max-w-xl mx-auto" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-2 text-center neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
                    GET EXCLUSIVE UPDATES
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Join Hardwired Weekly for exclusive drops, token updates, and 15% off your first order at HRDLF.com
                  </p>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (newsletterEmail) {
                        newsletterMutation.mutate({ email: newsletterEmail });
                      }
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-background/50 border-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-green transition-colors"
                      style={{ borderColor: 'oklch(0.75 0.25 240 / 0.5)' }}
                      aria-label="Email address"
                    />
                    <Button
                      type="submit"
                      disabled={newsletterMutation.isPending}
                      className="font-bold px-6 py-3 neon-glow"
                      style={{ 
                        backgroundColor: 'oklch(0.85 0.28 145)',
                        color: 'oklch(0.05 0.01 240)'
                      }}
                    >
                      {newsletterMutation.isPending ? 'JOINING...' : 'JOIN NOW'}
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    No spam. Unsubscribe anytime. Your email syncs with Beehiiv.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Share Buttons in Community */}
            <div className="mt-12">
              <p className="text-center text-sm text-muted-foreground mb-4 font-semibold">HELP US GROW - SHARE WITH YOUR NETWORK</p>
              <ShareButtons variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 holo-gradient opacity-10"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl sm:text-7xl font-black mb-8 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              DON'T MISS THE MOONSHOT
            </h2>
            <p className="text-2xl mb-12 text-muted-foreground">
              Every great investment starts with a decision. Make yours now.
            </p>
            <Button 
              size="lg" 
              className="text-2xl font-black px-12 py-8 neon-glow group"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 40px oklch(0.75 0.25 240)'
              }}
              onClick={() => window.open(moonshotLink, '_blank')}
            >
              BUY HRDLF NOW
              <Rocket className="ml-3 group-hover:translate-y-[-4px] transition-transform" size={32} />
            </Button>
            
            {/* Disclaimer */}
            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: 'oklch(0.95 0.25 100)' }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'oklch(0.95 0.25 100)', color: 'oklch(0.05 0.01 240)' }}>
                      <span className="text-sm font-black">!</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold mb-2" style={{ color: 'oklch(0.95 0.25 100)' }}>
                        👉 Read the HRDLF Coin explainer + official links{' '}
                        <a 
                          href="/HRDLF_Whitepaper.md" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline hover:text-neon-blue transition-colors"
                        >
                          here
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong>Disclaimer:</strong> HRDLF Coin is an experimental, high-risk crypto token. 
                        It's highly volatile and can lose value or go to zero. This is not financial advice. 
                        Always do your own research and never use money you can't afford to lose.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6 mono">
              Available on Moonshot.com • Trade with confidence
            </p>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <Testimonials 
        title="WHAT HOLDERS SAY"
        subtitle="Real feedback from the HRDLF community"
        testimonials={[
          {
            name: "Marcus Chen",
            role: "Early Investor",
            company: "Crypto Enthusiast",
            content: "HRDLF isn't just another meme coin. The connection to real streetwear and the founder's transparency makes this feel legit. I'm holding long-term.",
            rating: 5
          },
          {
            name: "Sarah Williams",
            role: "Fashion Entrepreneur",
            company: "Hardlife Apparel Customer",
            content: "I've been buying Hardlife gear for years. When I heard about the token, I knew I had to get in. It's cool to own a piece of a brand I actually wear.",
            rating: 5
          },
          {
            name: "Alex Rodriguez",
            role: "DeFi Trader",
            company: "Solana Community",
            content: "The tokenomics are solid, the community is growing fast, and the real-world utility through merchandise is unique. This could actually moon.",
            rating: 5
          },
          {
            name: "Jamie Foster",
            role: "Streetwear Collector",
            company: "HRDLF Holder",
            content: "Finally, a crypto project that makes sense. Fashion meets blockchain, and the founder is actually building something real, not just hype.",
            rating: 5
          },
          {
            name: "David Kim",
            role: "Tech Investor",
            company: "Web3 Builder",
            content: "The combination of real streetwear brand with crypto utility is brilliant. Brooks has been building for 18 years - this isn't a fly-by-night project.",
            rating: 5
          },
          {
            name: "Nina Patel",
            role: "Marketing Director",
            company: "E-commerce Brand",
            content: "I discovered HRDLF through the apparel and now I'm holding the token. Love supporting brands that actually have real products and history.",
            rating: 5
          }
        ]}
      />



      {/* Footer */}
      <footer className="py-16 border-t border-neon-blue/30 bg-background/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand & About */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <img src="/images/official-skull-logo.jpg" alt="HRDLF Logo" className="w-12 h-12 object-contain" />
                <div>
                  <div className="font-black text-lg" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF TOKEN</div>
                  <div className="text-xs text-muted-foreground mono">Hardlife Apparel Company LTD</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs leading-relaxed">
                Founded in Philadelphia (2007), expanded through Scottsdale, now operating globally from southern Norway. 
                Bringing authentic streetwear culture to Web3.
              </p>
            </div>

            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-black text-sm mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>COMPANY</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div>
                  <div className="font-semibold text-foreground">Hardlife Apparel Company LTD</div>
                  <div className="text-xs">Est. 2007</div>
                </div>
                <div className="text-xs">
                  📍 Founded: Philadelphia, PA, USA<br />
                  📍 Expanded: Scottsdale, AZ, USA<br />
                  📍 HQ: Southern Norway
                </div>
                <div className="text-xs">
                  📧 <a href="mailto:info@hardlifeapparelco.com" className="hover:text-neon-blue transition-colors">info@hardlifeapparelco.com</a>
                </div>
              </div>
            </div>

            {/* Ecosystem */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-black text-sm mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>ECOSYSTEM</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div>
                  <a href="https://hrdlfcoin.com" className="font-semibold text-foreground hover:text-neon-blue transition-colors">HRDLFCOIN</a>
                  <div className="text-xs">Crypto token on Solana</div>
                </div>
                <div>
                  <a href="https://hrdlf.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-neon-pink transition-colors">HRDLF.com</a>
                  <div className="text-xs">Exclusive apparel store</div>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Hardwired Weekly</span>
                  <div className="text-xs text-neon-yellow">Newsletter - Coming Soon</div>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Agent Mode</span>
                  <div className="text-xs text-neon-yellow">AI automation course - Coming Soon</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-black text-sm mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>RESOURCES</h3>
              <div className="flex flex-col gap-2 text-sm text-center md:text-right">
                <a href="#about" className="text-muted-foreground hover:text-neon-blue transition-colors">About</a>
                <a href="#tokenomics" className="text-muted-foreground hover:text-neon-pink transition-colors">Tokenomics</a>
                <a href="#community" className="text-muted-foreground hover:text-neon-green transition-colors">Community</a>
                <a href="/HRDLF_Whitepaper.md" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-yellow transition-colors">Whitepaper</a>
                <a href="https://reddit.com/r/HRDLF" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">Reddit</a>
              </div>
            </div>
          </div>

          {/* Social Media Row */}
          <div className="mb-8">
            <h3 className="font-black text-sm mb-4 text-center" style={{ color: 'oklch(0.75 0.25 240)' }}>CONNECT WITH US</h3>
            <div className="flex gap-4 justify-center">
                <a
                  href="https://twitter.com/HardLifeApparel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border-2 flex items-center justify-center hover:border-neon-blue transition-all neon-glow-hover"
                  style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}
                  aria-label="Twitter/X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/hardlifeapparel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border-2 flex items-center justify-center hover:border-neon-pink transition-all neon-glow-hover"
                  style={{ borderColor: 'oklch(0.65 0.30 340 / 0.3)' }}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/Xg6x5Buc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border-2 flex items-center justify-center hover:border-neon-green transition-all neon-glow-hover"
                  style={{ borderColor: 'oklch(0.75 0.25 140 / 0.3)' }}
                  aria-label="Discord"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/hrdlfcoin1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card/50 backdrop-blur-sm border-2 flex items-center justify-center hover:border-neon-yellow transition-all neon-glow-hover"
                  style={{ borderColor: 'oklch(0.95 0.25 100 / 0.3)' }}
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
            </div>
          </div>

          {/* AML/CTF Compliance Section */}
          <div className="mb-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}>
              <CardContent className="p-6">
                <h3 className="font-black text-sm mb-4 text-center" style={{ color: 'oklch(0.75 0.25 240)' }}>REGULATORY COMPLIANCE</h3>
                <div className="text-xs text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    <strong className="text-foreground">AML/CTF Compliance:</strong> Hardlife Apparel Company LTD operates in full compliance with Norwegian Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) regulations as mandated by Norwegian authorities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="font-semibold text-foreground mb-1">Finanstilsynet (FSA)</div>
                      <div className="text-xs">Regulates crypto businesses (VASPs)</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground mb-1">Skatteetaten</div>
                      <div className="text-xs">Tax Administration oversight</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground mb-1">Økokrim</div>
                      <div className="text-xs">Financial Intelligence Unit</div>
                    </div>
                  </div>
                  <p className="text-center mt-4">
                    We implement robust measures to prevent money laundering and terrorist financing in accordance with Norwegian law, ensuring a secure and transparent ecosystem for all participants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neon-blue/20 text-center">
            <p className="text-sm font-bold mb-2" style={{ color: 'oklch(0.75 0.25 240)' }}>© 2025 Hardlife Apparel Company LTD</p>
            <p className="text-xs text-muted-foreground mb-2">A legitimate streetwear brand backing a real crypto token</p>
            <p className="mono text-xs text-muted-foreground mb-2">Contact: info@hardlifeapparelco.com | Based in Norway</p>
            <p className="mono text-xs text-muted-foreground">Cryptocurrency investments carry risk. Trade responsibly.</p>
            
            {/* Trust Line */}
            <div className="mt-6 pt-4 border-t border-neon-blue/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">HRDLF Coin (HRDLF)</span> — Official Solana token powered by HardLife Apparel Company LTD.
                {" "}
                <a href="/verify" className="text-neon-green hover:underline">Verify</a>
                {" • "}
                <span className="mono">Mint: B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon</span>
                {" • "}
                <a href="https://moonshot.com/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:underline">Moonshot</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes grid-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
      
      {/* Back to Top Button */}
      <BackToTop />
      <LiveChat />
      
      {/* Email Capture Popup - triggers after 5 seconds */}
      <EmailPopup triggerType="timed" delay={5000} />
    </div>
    </>
  );
}
