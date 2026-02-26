import { Shield, CheckCircle2, ExternalLink, Rocket, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TrustBadges() {
  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";
  const solscanLink = `https://solscan.io/token/${contractAddress}`;
  const moonshotLink = "https://moonshot.com";
  const appStoreLink = "https://apps.apple.com/us/app/moonshot/id6503993131";
  const googlePlayLink = "https://play.google.com/store/apps/details?id=money.moonshot.app";

  return (
    <div className="py-12 bg-background/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Trust Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 neon-border mb-4" style={{ borderColor: 'oklch(0.85 0.28 145)', backgroundColor: 'oklch(0.85 0.28 145 / 0.1)' }}>
              <Shield className="w-5 h-5" style={{ color: 'oklch(0.85 0.28 145)' }} />
              <span className="text-sm font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>VERIFIED & LEGITIMATE</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Official HRDLF Token</h3>
            <p className="text-muted-foreground">
              Backed by <span className="font-bold" style={{ color: 'oklch(0.75 0.25 240)' }}>Hardlife Apparel Company LTD</span> - A real streetwear brand since 2006
            </p>
          </div>

          {/* Trust Badges Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Moonshot Listing - PRIMARY */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform relative overflow-hidden" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold animate-pulse" style={{ backgroundColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.15 0.01 145)' }}>
                LIVE
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center neon-glow" style={{ backgroundColor: 'oklch(0.65 0.30 340 / 0.2)' }}>
                  <Rocket className="w-8 h-8" style={{ color: 'oklch(0.65 0.30 340)' }} />
                </div>
                <h4 className="text-lg font-bold mb-2">Trade on Moonshot</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Buy HRDLF instantly on the Moonshot app
                </p>
                <a
                  href={moonshotLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{ color: 'oklch(0.65 0.30 340)' }}
                >
                  Get the App
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            {/* Solscan Verification */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center neon-glow" style={{ backgroundColor: 'oklch(0.75 0.25 240 / 0.2)' }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: 'oklch(0.75 0.25 240)' }} />
                </div>
                <h4 className="text-lg font-bold mb-2">Verified on Solscan</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contract verified on Solana's blockchain explorer
                </p>
                <a
                  href={solscanLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{ color: 'oklch(0.75 0.25 240)' }}
                >
                  View on Solscan
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            {/* Real Business Badge */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border hover:scale-105 transition-transform" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center neon-glow" style={{ backgroundColor: 'oklch(0.85 0.28 145 / 0.2)' }}>
                  <Shield className="w-8 h-8" style={{ color: 'oklch(0.85 0.28 145)' }} />
                </div>
                <h4 className="text-lg font-bold mb-2">Real Brand Backed</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Backed by Hardlife Apparel Company LTD since 2006
                </p>
                <a
                  href="https://HRDLF.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{ color: 'oklch(0.85 0.28 145)' }}
                >
                  Visit Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* How to Buy Section with App Store Badges */}
          <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6" style={{ color: 'oklch(0.65 0.30 340)' }} />
                <h4 className="text-lg font-bold" style={{ color: 'oklch(0.65 0.30 340)' }}>HOW TO BUY HRDLF</h4>
              </div>
              
              {/* App Store Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <a 
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <img 
                    src="/images/app-store-badge.png" 
                    alt="Download Moonshot on App Store" 
                    className="h-12 object-contain"
                  />
                </a>
                <a 
                  href={googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <img 
                    src="/images/google-play-badge.png" 
                    alt="Get Moonshot on Google Play" 
                    className="h-12 object-contain"
                  />
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-black text-lg" style={{ backgroundColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.98 0.01 340)' }}>1</div>
                  <h5 className="font-bold mb-1">Download Moonshot</h5>
                  <p className="text-xs text-muted-foreground">Get the app from App Store or Google Play</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-black text-lg" style={{ backgroundColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.98 0.01 340)' }}>2</div>
                  <h5 className="font-bold mb-1">Search HRDLF</h5>
                  <p className="text-xs text-muted-foreground">Paste the contract address in search</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center font-black text-lg" style={{ backgroundColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.98 0.01 340)' }}>3</div>
                  <h5 className="font-bold mb-1">Buy Instantly</h5>
                  <p className="text-xs text-muted-foreground">Purchase with card or crypto</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contract Address Display */}
          <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="mono text-sm font-bold" style={{ color: 'oklch(0.75 0.25 240)' }}>OFFICIAL CONTRACT ADDRESS</span>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.85 0.28 145)' }}></div>
                  </div>
                  <div className="bg-background/80 p-3 rounded-md border border-border mb-3">
                    <code className="text-xs break-all text-foreground font-mono">{contractAddress}</code>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    ⚠️ <strong>Always verify the contract address before trading.</strong> Copy this address and paste it in the Moonshot app to find HRDLF.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
