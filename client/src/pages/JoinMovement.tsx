/* Join the Movement - HRDLF Community Page
 * Authentic grassroots storytelling
 * Emphasizes charitable mission and skateboarding roots
 * Designed to make visitors feel part of something meaningful
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Gift, Rocket, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function JoinMovement() {
  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";
  const moonshotLink = "https://dex.moonshot.cc/solana/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";
  const fourthwallLink = "https://hrdlf.com";
  const telegramLink = "https://t.me/hrdlfcoin1";
  const discordLink = "https://discord.gg/Xg6x5Buc8";
  const twitterLink = "https://twitter.com/HardLifeApparel";

  return (
    <>
      <SEO
        title="Join the HRDLF Movement - From a Tiny Seed, Something Great Can Grow"
        description="Join the grassroots HRDLF community. Born from skateboarding, built on friendship, driven by a dream to give back. Airdrops, giveaways, charitable programs, and more."
        keywords="HRDLF movement, join HRDLF, HRDLF community, skateboarding crypto, charitable token, Hardlife Apparel, grassroots crypto"
        canonicalUrl="https://hrdlfcoin.com/join"
        breadcrumbs={[
          { name: "Home", url: "https://hrdlfcoin.com" },
          { name: "Join the Movement", url: "https://hrdlfcoin.com/join" }
        ]}
      />
      <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-neon-blue/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src="/images/hrdlf-skull-logo.png" 
                alt="HRDLF" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-black tracking-wider" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
            </div>
          </Link>
          <Button 
            size="sm" 
            className="font-bold neon-glow"
            style={{ 
              backgroundColor: 'oklch(0.75 0.25 240)',
              color: 'oklch(0.05 0.01 240)',
              boxShadow: '0 0 20px oklch(0.75 0.25 240)'
            }}
            onClick={() => window.open(moonshotLink, '_blank')}
          >
            GET HRDLF
          </Button>
        </div>
      </nav>
      
      {/* Announcement Bar */}
      <div className="fixed top-[72px] left-0 right-0 z-40">
        <AnnouncementBar />
      </div>

      {/* Hero Section - Emotional Opening */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-background to-background"></div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-2 mb-8 rounded-full border-2" style={{ borderColor: 'oklch(0.85 0.28 145)', backgroundColor: 'oklch(0.85 0.28 145 / 0.1)' }}>
              <span className="text-sm font-black mono" style={{ color: 'oklch(0.85 0.28 145)' }}>FROM A TINY SEED, SOMETHING GREAT CAN GROW</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              This Isn't Just a Token.<br />
              <span className="neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>It's a Movement.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              HRDLF was born from skateboarding, built on friendship, and driven by a dream to give back. 
              Every holder becomes part of a community dedicated to changing lives—starting with yours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg font-black px-8 py-6 neon-glow group"
                style={{ 
                  backgroundColor: 'oklch(0.85 0.28 145)',
                  color: 'oklch(0.05 0.01 240)',
                  boxShadow: '0 0 30px oklch(0.85 0.28 145)'
                }}
                onClick={() => window.open(moonshotLink, '_blank')}
              >
                JOIN THE MOVEMENT
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg font-bold px-8 py-6 border-2"
                style={{ 
                  borderColor: 'oklch(0.75 0.25 240)',
                  color: 'oklch(0.75 0.25 240)'
                }}
                onClick={() => window.open(fourthwallLink, '_blank')}
              >
                GET THE GEAR
                <ExternalLink className="ml-2" size={20} />
              </Button>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <a href="https://apps.apple.com/us/app/moonshot/id6503993131" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <img src="/images/app-store-badge.png" alt="Download on App Store" className="h-[40px] sm:h-[48px] w-auto object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=money.moonshot.app" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-[40px] sm:h-[48px] w-auto object-contain" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mono">
              Download Moonshot • Search contract address • Join the family
            </p>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <img 
                  src="/images/dave-duncan-brooks-baltimore.jpeg" 
                  alt="Brooks with Dave Duncan at Baltimore skatepark" 
                  className="rounded-lg w-full neon-border"
                  style={{ 
                    borderWidth: '3px',
                    borderColor: 'oklch(0.75 0.25 240)',
                    boxShadow: '0 0 40px oklch(0.75 0.25 240 / 0.3)'
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-blue/50">
                  <p className="text-sm font-bold" style={{ color: 'oklch(0.75 0.25 240)' }}>Baltimore, MD</p>
                  <p className="text-xs text-muted-foreground">With Dave Duncan (@doubleddunc)</p>
                </div>
              </div>

              {/* Story Text */}
              <div>
                <h2 className="text-4xl font-black mb-6" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  100% Skateboarder. Always.
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    If you've ever watched the X Games or Dew Tour and heard skateboarding called with passion and authenticity, 
                    you've heard the voice of <strong className="text-foreground">Dave Duncan</strong>—a friend and true supporter 
                    of what we created way back when.
                  </p>
                  <p>
                    The list of people who believed in this dream is long. From OG Bones Brigade members 
                    <strong className="text-foreground"> Scott Foss, Jay Smith, and Ray "Bones" Rodriguez</strong> to the creators 
                    of World Cup Skateboarding and the <strong className="text-foreground">Vans family</strong>—there are many to thank.
                  </p>
                  <p>
                    From being an Uber driver, a waiter, a volunteer, and a wheel loader operator—I've tried to make the most 
                    out of every experience. But through it all, I've been <strong className="text-foreground">100% skateboarder</strong>.
                  </p>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/30">
                  <p className="text-sm italic text-muted-foreground">
                    "The acceptance and friendship I found through skateboarding has been life-changing. 
                    What I've wanted to do since is give thanks and appreciation. This is how it starts."
                  </p>
                  <p className="text-sm font-bold mt-2" style={{ color: 'oklch(0.75 0.25 240)' }}>— Brooks, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Together */}
      <section className="py-24 relative bg-gradient-to-b from-background via-neon-pink/5 to-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>
              What We're Building Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The sky is the limit on what we can create with HRDLF. Here's just the beginning.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Gift size={32} />,
                title: "Airdrops & Giveaways",
                description: "Weekly contests, surprise drops, and rewards for active community members.",
                color: "oklch(0.85 0.28 145)"
              },
              {
                icon: <Sparkles size={32} />,
                title: "Exclusive Discounts",
                description: "Coupon codes for HRDLF apparel tied directly to token holdings.",
                color: "oklch(0.75 0.25 240)"
              },
              {
                icon: <Users size={32} />,
                title: "Community Voice",
                description: "Your input shapes our direction. Every holder has a say in what we build.",
                color: "oklch(0.65 0.30 340)"
              },
              {
                icon: <Rocket size={32} />,
                title: "Limitless Potential",
                description: "This is just the start. Together, we'll create things we haven't even imagined yet.",
                color: "oklch(0.95 0.25 100)"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 hover:scale-105 transition-transform duration-300"
                style={{ borderColor: item.color }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Bigger Vision - Charitable Mission */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 mb-8 rounded-full border-2" style={{ borderColor: 'oklch(0.65 0.30 340)', backgroundColor: 'oklch(0.65 0.30 340 / 0.1)' }}>
              <Heart className="inline-block mr-2" size={16} style={{ color: 'oklch(0.65 0.30 340)' }} />
              <span className="text-sm font-black mono" style={{ color: 'oklch(0.65 0.30 340)' }}>THE BIGGER VISION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              From a Tiny Seed,<br />
              <span style={{ color: 'oklch(0.65 0.30 340)' }}>Something That Can Benefit Many</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Hardlife was started as a thank you to a sport that made me feel I could do anything. 
              The goal has always been to manifest something that can benefit many. As our community grows, 
              so does our ability to give back.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Back to School Programs", description: "Supplies and support for children starting their educational journey" },
                { title: "Toy Drives at Christmas", description: "Bringing joy to kids who need it most during the holidays" },
                { title: "Food Drives", description: "Fighting hunger in our communities, one meal at a time" },
                { title: "Homelessness Support", description: "Helping those without shelter find warmth and hope" },
                { title: "Sponsor Programs", description: "Supporting young athletes chasing their dreams" },
                { title: "Community Initiatives", description: "Whatever our community decides to tackle together" }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card/30 border border-neon-pink/30 hover:border-neon-pink/60 transition-colors"
                >
                  <h3 className="font-bold mb-2" style={{ color: 'oklch(0.65 0.30 340)' }}>{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground italic">
              "This is about building something to change lives. I welcome everyone's input and always will."
            </p>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 relative bg-gradient-to-b from-background via-neon-green/5 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'oklch(0.85 0.28 145)' }}>
                Why Join Now?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ground Floor Opportunity</h3>
                  <p className="text-muted-foreground mb-4">
                    With a market cap under $6K, you're not late—you're early. This is exactly how great things begin. 
                    The curious ones who join now become the foundation of everything we build.
                  </p>
                  <div className="text-sm mono" style={{ color: 'oklch(0.85 0.28 145)' }}>
                    Current holders: 84+ and growing
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Real Brand, Real History</h3>
                  <p className="text-muted-foreground mb-4">
                    This isn't a random memecoin. It's backed by Hardlife Apparel Company—a streetwear brand 
                    with 18 years of history, real products, and connections to skateboarding legends.
                  </p>
                  <div className="text-sm mono" style={{ color: 'oklch(0.75 0.25 240)' }}>
                    Est. 2006 • Philadelphia → Scottsdale → Norway
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black mb-8" style={{ color: 'oklch(0.75 0.25 240)' }}>
              How to Join
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { step: "1", title: "Download Moonshot", description: "Get the app from App Store or Google Play" },
                { step: "2", title: "Search HRDLF", description: "Use the contract address to find us" },
                { step: "3", title: "Join the Family", description: "Buy any amount and become part of the movement" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black"
                    style={{ 
                      backgroundColor: 'oklch(0.75 0.25 240)',
                      color: 'oklch(0.05 0.01 240)'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Contract Address */}
            <div className="p-6 rounded-lg bg-card/50 border-2 mb-8" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <div className="text-sm text-muted-foreground mb-2 mono">CONTRACT ADDRESS (SOLANA)</div>
              <code className="text-sm sm:text-base break-all" style={{ color: 'oklch(0.75 0.25 240)' }}>
                {contractAddress}
              </code>
            </div>

            {/* Final CTA */}
            <Button 
              size="lg" 
              className="text-xl font-black px-12 py-8 neon-glow group"
              style={{ 
                backgroundColor: 'oklch(0.85 0.28 145)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 40px oklch(0.85 0.28 145)'
              }}
              onClick={() => window.open(moonshotLink, '_blank')}
            >
              JOIN THE MOVEMENT NOW
              <Rocket className="ml-3 group-hover:translate-y-[-4px] transition-transform" size={28} />
            </Button>
          </div>
        </div>
      </section>

      {/* How to Buy on Moonshot */}
      <section className="py-16 bg-background/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center neon-glow" style={{ color: 'oklch(0.75 0.25 240)' }}>
              How to Buy HRDLF on Moonshot
            </h2>
            
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border mb-8" style={{ borderColor: 'oklch(0.75 0.25 240)' }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg" style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}>1</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Download the Moonshot App</h3>
                      <p className="text-muted-foreground">Available on iOS App Store and Google Play Store. Create an account and complete verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg" style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}>2</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Add Funds to Your Wallet</h3>
                      <p className="text-muted-foreground">Deposit SOL or use a credit/debit card directly in the app. Moonshot makes it easy to buy with fiat.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg" style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}>3</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Search for HRDLF</h3>
                      <p className="text-muted-foreground">Search "HRDLF" in the app or paste the contract address: <code className="text-xs bg-background/80 px-2 py-1 rounded">{contractAddress}</code></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg" style={{ backgroundColor: 'oklch(0.85 0.28 145)', color: 'oklch(0.05 0.01 240)' }}>4</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Buy HRDLF</h3>
                      <p className="text-muted-foreground">Enter the amount you want to purchase and confirm. Welcome to the movement!</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="font-bold"
                    style={{ backgroundColor: 'oklch(0.75 0.25 240)', color: 'oklch(0.05 0.01 240)' }}
                    onClick={() => window.open(moonshotLink, '_blank')}
                  >
                    <ExternalLink className="mr-2 w-5 h-5" />
                    Open Moonshot
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Official Contract Address */}
            <Card className="bg-card/50 backdrop-blur-sm border-2 neon-border" style={{ borderColor: 'oklch(0.85 0.28 145)' }}>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Official Contract Address (Solana)</h3>
                  <p className="text-sm text-muted-foreground mb-3">Always verify you're buying the correct token</p>
                  <div className="bg-background/80 p-4 rounded-md border border-border">
                    <code className="text-sm break-all" style={{ color: 'oklch(0.75 0.25 240)' }}>{contractAddress}</code>
                  </div>
                  <a 
                    href="/verify" 
                    className="inline-block mt-4 text-sm font-semibold hover:underline"
                    style={{ color: 'oklch(0.85 0.28 145)' }}
                  >
                    → View Official Verification Page
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/30 border border-muted">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">⚠️</span> Important Risk Disclosure
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">No Guarantees:</strong> HRDLF Coin is an experimental cryptocurrency token. There are no guarantees of returns, profits, or future value. Past performance does not indicate future results.
                  </p>
                  <p>
                    <strong className="text-foreground">High Volatility:</strong> Cryptocurrency markets are extremely volatile. The value of HRDLF can fluctuate dramatically and may go to zero. Only invest what you can afford to lose completely.
                  </p>
                  <p>
                    <strong className="text-foreground">Not Financial Advice:</strong> Nothing on this website constitutes financial, investment, legal, or tax advice. Always conduct your own research (DYOR) and consult with qualified professionals before making any investment decisions.
                  </p>
                  <p>
                    <strong className="text-foreground">Regulatory Uncertainty:</strong> Cryptocurrency regulations vary by jurisdiction and are subject to change. It is your responsibility to understand and comply with applicable laws in your region.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-16 border-t border-neon-blue/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-card/50 border-2 hover:scale-105 transition-transform flex items-center gap-2"
                style={{ borderColor: 'oklch(0.75 0.25 240)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <a
                href={discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-card/50 border-2 hover:scale-105 transition-transform flex items-center gap-2"
                style={{ borderColor: 'oklch(0.65 0.30 340)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-card/50 border-2 hover:scale-105 transition-transform flex items-center gap-2"
                style={{ borderColor: 'oklch(0.85 0.28 145)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter/X
              </a>
              <a
                href={fourthwallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-card/50 border-2 hover:scale-105 transition-transform flex items-center gap-2"
                style={{ borderColor: 'oklch(0.95 0.25 100)' }}
              >
                <ExternalLink className="w-5 h-5" />
                Shop HRDLF.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neon-blue/20">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 Hardlife Apparel Company LTD. All rights reserved.
          </p>
          <p className="mono text-xs text-muted-foreground mb-4">
            #NothingAwesomeComesEasy 💀
          </p>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> HRDLF is an experimental crypto token. It's highly volatile and can lose value. 
            This is not financial advice. Always do your own research and never invest more than you can afford to lose.
          </p>
          
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
