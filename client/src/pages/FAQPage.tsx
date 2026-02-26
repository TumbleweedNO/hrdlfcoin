import { Link } from "wouter";
import FAQ from "../components/FAQ";
import SEO from "../components/SEO";
import { AnnouncementBar } from "../components/AnnouncementBar";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Frequently Asked Questions | HRDLF Token"
        description="Get answers to all your questions about HRDLF Token, Hardlife Apparel Company, tokenomics, security, and how to participate in the streetwear crypto revolution."
        keywords="HRDLF FAQ, crypto questions, token information, Hardlife Apparel, streetwear blockchain, Solana token FAQ"
        canonicalUrl="https://hrdlfcoin.com/faq"
      />

      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neon-blue/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/skull-laurel-logo.svg" alt="HRDLF Logo" className="h-10 w-10" />
                <span className="font-display text-2xl font-bold text-neon-blue">HRDLF</span>
              </a>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/#about">
                <a className="text-sm font-medium hover:text-neon-blue transition-colors">ABOUT</a>
              </Link>
              <Link href="/#tokenomics">
                <a className="text-sm font-medium hover:text-neon-blue transition-colors">TOKENOMICS</a>
              </Link>
              <Link href="/#community">
                <a className="text-sm font-medium hover:text-neon-blue transition-colors">COMMUNITY</a>
              </Link>
              <Link href="/verify">
                <a className="text-sm font-medium hover:text-neon-green transition-colors">VERIFY</a>
              </Link>
              <Link href="https://hrdlfcoin.com/HRDLF_Whitepaper.md">
                <a className="text-sm font-medium hover:text-neon-blue transition-colors" target="_blank">WHITEPAPER</a>
              </Link>
              <Link href="/faq">
                <a className="text-sm font-medium text-neon-blue">FAQ</a>
              </Link>
              <a
                href="https://dexscreener.com/solana/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-neon-blue text-background font-bold rounded-md hover:bg-neon-blue/90 transition-colors"
              >
                BUY NOW
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Announcement Bar */}
      <div className="fixed top-[72px] left-0 right-0 z-40">
        <AnnouncementBar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-neon-blue glow-text">Frequently Asked</span>
              <br />
              <span className="text-neon-pink glow-text-pink">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about HRDLF Token, Hardlife Apparel Company, and the streetwear crypto ecosystem.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>27 Questions Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Updated January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 relative">
        <div className="container">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neon-blue glow-text">Still Have Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community or reach out directly. We're here to help you understand the HRDLF ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/hrdlfcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-neon-blue text-background font-bold rounded-md hover:bg-neon-blue/90 transition-colors"
              >
                Join Telegram
              </a>
              <a
                href="https://twitter.com/hrdlfcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-neon-blue text-neon-blue font-bold rounded-md hover:bg-neon-blue/10 transition-colors"
              >
                Follow on Twitter
              </a>
              <a
                href="mailto:info@hardlifeapparelco.com"
                className="px-8 py-3 border-2 border-neon-pink text-neon-pink font-bold rounded-md hover:bg-neon-pink/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neon-blue/20">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © 2025 Hardlife Apparel Company LTD. All rights reserved.
            </p>
            <p className="mono text-xs text-muted-foreground mb-2">
              Registered in Norway | Business Reg: NO-[Registration Number]
            </p>
            <p className="mono text-xs text-muted-foreground">
              Cryptocurrency investments carry risk. Trade responsibly.
            </p>
            <div className="mt-4">
              <Link href="/">
                <a className="text-sm text-neon-blue hover:underline">Back to Home</a>
              </Link>
            </div>
            
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
    </div>
  );
}
