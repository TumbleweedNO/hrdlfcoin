import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2, ExternalLink, FileText, Building2, Globe, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import SEO from "@/components/SEO";

export default function Verify() {
  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";
  const solscanLink = `https://solscan.io/token/${contractAddress}`;
  const moonshotLink = `https://moonshot.com/token/${contractAddress}`;

  return (
    <>
      <SEO 
        title="Official Verification — HRDLF Coin (HRDLF)"
        description="Complete documentation proving HRDLF is a legitimate cryptocurrency project backed by Hardlife Apparel Company LTD, an established streetwear brand with 18 years of history."
        keywords="HRDLF verify, HRDLF legitimacy, Hardlife Apparel proof, Solana token verification, HRDLF scam check"
        canonicalUrl="https://hrdlfcoin.com/verify"
      />
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-neon-blue/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/images/official-skull-logo.jpg" alt="HRDLF Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-black tracking-wider" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-semibold hover:text-neon-blue transition-colors">← BACK TO HOME</a>
          </Link>
        </div>
      </nav>
      
      {/* Announcement Bar */}
      <div className="fixed top-[72px] left-0 right-0 z-40">
        <AnnouncementBar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(oklch(0.75 0.25 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.25 240) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 neon-border mb-6" style={{ borderColor: 'oklch(0.85 0.28 145)', backgroundColor: 'oklch(0.85 0.28 145 / 0.1)' }}>
              <Shield className="w-6 h-6" style={{ color: 'oklch(0.85 0.28 145)' }} />
              <span className="text-lg font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>VERIFICATION CENTER</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-black mb-6 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              HRDLF Coin (HRDLF) — Official Project Links & Contract
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome. This page exists to prevent impersonation and confirm the official HRDLF Coin project identity.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Verification Grid */}
      <section className="py-12 bg-background/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12">Quick Verification Checklist</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Blockchain Verified */}
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }} />
                  <h3 className="font-bold mb-2">Blockchain Verified</h3>
                  <p className="text-sm text-muted-foreground">Contract verified on Solscan</p>
                </CardContent>
              </Card>

              {/* Exchange Listed */}
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }} />
                  <h3 className="font-bold mb-2">Exchange Listed</h3>
                  <p className="text-sm text-muted-foreground">Trading on Moonshot.com</p>
                </CardContent>
              </Card>

              {/* Real Business */}
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }} />
                  <h3 className="font-bold mb-2">Real Business</h3>
                  <p className="text-sm text-muted-foreground">18-year streetwear brand</p>
                </CardContent>
              </Card>

              {/* Active Community */}
              <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.95 0.25 100)' }}>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 neon-glow" style={{ color: 'oklch(0.95 0.25 100)' }} />
                  <h3 className="font-bold mb-2">Active Community</h3>
                  <p className="text-sm text-muted-foreground">84+ holders, multiple platforms</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Official Token Details */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
              Official Token Details
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Token Name:</span>
                    <span className="font-bold text-lg">HRDLF Coin</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Ticker:</span>
                    <span className="font-bold text-lg" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Network:</span>
                    <span className="font-bold text-lg">Solana</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-muted-foreground font-semibold">Official Contract (Mint Address):</span>
                    <div className="bg-background/80 p-4 rounded-md border border-border">
                      <code className="text-sm break-all text-foreground font-mono">{contractAddress}</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Official Project Links */}
      <section className="py-16 bg-background/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
              Official Project Links
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Website:</span>
                    <a href="https://HRDLFcoin.com" className="font-bold text-lg hover:underline" style={{ color: 'oklch(0.75 0.25 240)' }}>https://HRDLFcoin.com</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Join / Community:</span>
                    <a href="https://HRDLFcoin.com/join/" className="font-bold text-lg hover:underline" style={{ color: 'oklch(0.85 0.28 145)' }}>https://HRDLFcoin.com/join/</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Official X (HardLife Apparel):</span>
                    <a href="https://x.com/hardlifeapparel" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline" style={{ color: 'oklch(0.65 0.30 340)' }}>@HardLifeApparel</a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-muted-foreground font-semibold min-w-[180px]">Moonshot Listing:</span>
                    <a href={moonshotLink} target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline" style={{ color: 'oklch(0.95 0.25 100)' }}>View on Moonshot</a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    (Search "HRDLF" on Moonshot or use the contract above.)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contract Verification */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              Blockchain Verification
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Official Solana Contract Address</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This is the ONLY legitimate HRDLF token contract on Solana blockchain. Always verify before trading.
                    </p>
                    <div className="bg-background/80 p-4 rounded-md border border-border mb-4">
                      <code className="text-sm break-all text-foreground font-mono">{contractAddress}</code>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        className="border-2"
                        style={{ borderColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.75 0.25 240)' }}
                        onClick={() => window.open(solscanLink, '_blank')}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Verify on Solscan
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2"
                        style={{ borderColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.65 0.30 340)' }}
                        onClick={() => window.open(moonshotLink, '_blank')}
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Trade on Moonshot
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-background/50 p-4 rounded-md border-l-4" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">✅ Verified:</strong> Contract is publicly viewable on Solscan, 
                    showing all transactions, holders, and token metadata. This transparency proves the token is legitimate 
                    and not a scam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="py-16 bg-background/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
              2. Official Whitepaper
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.65 0.30 340)' }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.05 0.01 240)' }}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">HRDLF Token Whitepaper</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive documentation covering project vision, tokenomics, utility, roadmap, and charitable mission.
                    </p>
                    
                    <div className="bg-background/80 p-6 rounded-md border border-border mb-4">
                      <h4 className="font-bold mb-3">Whitepaper Contents:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-neon-blue mt-1">▸</span>
                          <span><strong>Introduction:</strong> HRDLF's mission to bridge streetwear and crypto</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-pink mt-1">▸</span>
                          <span><strong>Brand History:</strong> 18 years of Hardlife Apparel heritage (2007-2025)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-green mt-1">▸</span>
                          <span><strong>Tokenomics:</strong> Supply, distribution, and economic model</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-yellow mt-1">▸</span>
                          <span><strong>Utility & Benefits:</strong> Exclusive merchandise access, VIP events, governance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-blue mt-1">▸</span>
                          <span><strong>Charitable Impact:</strong> Homeless youth support, hunger relief, community programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-pink mt-1">▸</span>
                          <span><strong>Roadmap:</strong> Development phases and future plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-green mt-1">▸</span>
                          <span><strong>Team & Advisors:</strong> Founder background and company structure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-neon-yellow mt-1">▸</span>
                          <span><strong>Risk Disclosure:</strong> Transparent communication about cryptocurrency risks</span>
                        </li>
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="w-full font-bold neon-glow"
                      style={{ 
                        backgroundColor: 'oklch(0.65 0.30 340)',
                        color: 'oklch(0.05 0.01 240)',
                        boxShadow: '0 0 20px oklch(0.65 0.30 340)'
                      }}
                      onClick={() => window.open('/HRDLF_Whitepaper.md', '_blank')}
                    >
                      <FileText className="mr-2 w-5 h-5" />
                      READ FULL WHITEPAPER
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
              3. Real Business Entity
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.05 0.01 240)' }}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Hardlife Apparel Company LTD</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      HRDLF token is backed by a legitimate streetwear company with nearly two decades of history, 
                      real products, and an established customer base.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div className="bg-background/80 p-4 rounded-md border border-border">
                        <div className="text-xs text-muted-foreground mb-1">COMPANY NAME</div>
                        <div className="font-bold">Hardlife Apparel Company LTD</div>
                      </div>
                      <div className="bg-background/80 p-4 rounded-md border border-border">
                        <div className="text-xs text-muted-foreground mb-1">ESTABLISHED</div>
                        <div className="font-bold">2007 (18 years)</div>
                      </div>
                      <div className="bg-background/80 p-4 rounded-md border border-border">
                        <div className="text-xs text-muted-foreground mb-1">LOCATION</div>
                        <div className="font-bold">Norway</div>
                      </div>
                      <div className="bg-background/80 p-4 rounded-md border border-border">
                        <div className="text-xs text-muted-foreground mb-1">INDUSTRY</div>
                        <div className="font-bold">Streetwear & Fashion</div>
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-md border-l-4 mb-6" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong className="text-foreground">Company History:</strong>
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Founded in 2007 in Philadelphia skateboarding scene</li>
                        <li>• 10 years of growth (2007-2017) building loyal community</li>
                        <li>• Extensive charitable work: homeless youth, hunger relief, school supplies</li>
                        <li>• Reorganization period (2017-2026) maintaining brand integrity</li>
                        <li>• 2026 comeback with HRDLF token launch</li>
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-2"
                      style={{ borderColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.85 0.28 145)' }}
                      onClick={() => window.open('https://HRDLF.com', '_blank')}
                    >
                      <Globe className="mr-2 w-4 h-4" />
                      Visit Official Store (HRDLF.com)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Community */}
      <section className="py-16 bg-background/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.95 0.25 100)' }}>
              4. Active Community & Social Presence
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.95 0.25 100)' }}>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>84+</div>
                    <div className="text-sm text-muted-foreground mono">TOKEN HOLDERS</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-background/50">
                    <div className="text-4xl font-black mb-2 neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>210+</div>
                    <div className="text-sm text-muted-foreground mono">TRANSACTIONS</div>
                  </div>
                </div>

                <h3 className="font-bold mb-4 text-center">Official Social Media Channels</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.75 0.25 240)' }}
                    onClick={() => window.open('https://twitter.com/HardLifeApparel', '_blank')}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Twitter/X
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.65 0.30 340)' }}
                    onClick={() => window.open('https://instagram.com/hardlifeapparel', '_blank')}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.85 0.28 145)' }}
                    onClick={() => window.open('https://discord.gg/buUpxPTe', '_blank')}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Discord
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'oklch(0.95 0.25 100)', color: 'oklch(0.95 0.25 100)' }}
                    onClick={() => window.open('https://t.me/hardlifehrdlf', '_blank')}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              5. Regulatory Compliance
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-8">
                <h3 className="font-bold mb-4 text-center">AML/CTF Compliance</h3>
                <p className="text-sm text-muted-foreground mb-6 text-center">
                  Hardlife Apparel Company LTD operates in full compliance with Norwegian Anti-Money Laundering (AML) 
                  and Counter-Terrorist Financing (CTF) regulations.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="font-bold mb-1">Finanstilsynet (FSA)</div>
                    <div className="text-xs text-muted-foreground">Crypto business regulation</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="font-bold mb-1">Skatteetaten</div>
                    <div className="text-xs text-muted-foreground">Tax administration</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-background/50">
                    <div className="font-bold mb-1">Økokrim</div>
                    <div className="text-xs text-muted-foreground">Financial Intelligence Unit</div>
                  </div>
                </div>

                <div className="bg-background/50 p-4 rounded-md border-l-4" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                  <p className="text-sm text-muted-foreground">
                    We implement robust measures to prevent money laundering and terrorist financing in accordance 
                    with Norwegian law, ensuring a secure and transparent ecosystem for all participants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-background/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're committed to transparency. Contact us directly or visit our comprehensive FAQ page.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-bold neon-glow"
                style={{ 
                  backgroundColor: 'oklch(0.75 0.25 240)',
                  color: 'oklch(0.05 0.01 240)',
                  boxShadow: '0 0 20px oklch(0.75 0.25 240)'
                }}
                onClick={() => window.location.href = '/faq'}
              >
                VIEW FAQ
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                style={{ borderColor: 'oklch(0.65 0.30 340)', color: 'oklch(0.65 0.30 340)' }}
                onClick={() => window.location.href = 'mailto:info@hardlifeapparelco.com'}
              >
                EMAIL US
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8 mono">
              info@hardlifeapparelco.com | Based in Norway
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neon-blue/20">
        <div className="container px-4 text-center">
          <p className="text-sm font-bold mb-2" style={{ color: 'oklch(0.75 0.25 240)' }}>© 2025 Hardlife Apparel Company LTD</p>
          <p className="text-xs text-muted-foreground">A legitimate streetwear brand backing a real crypto token</p>
          
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
      </footer>
    </div>
    </>
  );
}
