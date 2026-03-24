import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is HRDLF Token?",
    answer: "HRDLF is a cryptocurrency token built on the Solana blockchain that represents ownership in the Hardlife movement. It's backed by Hardlife Apparel Company LTD, an authentic streetwear brand with 19 years of history founded in Philadelphia in 2006. When you hold HRDLF, you're not just investing in crypto—you're joining a lifestyle movement that bridges streetwear culture and Web3 innovation."
  },
  {
    question: "Who created HRDLF Token?",
    answer: "HRDLF Token was designed by Brooks, the Founder and CEO of Hardlife Apparel Company LTD. Brooks started Hardlife in Philadelphia, PA in 2006, expanded the brand through Scottsdale, Arizona, and now operates from southern Norway. With 19 years of experience in streetwear and skate culture, Brooks brings authentic credibility to the Web3 space."
  },
  {
    question: "Where is Hardlife Apparel Company based?",
    answer: "Hardlife Apparel Company LTD was founded in Philadelphia, PA, USA in 2006, expanded through Scottsdale, Arizona, and is currently headquartered in southern Norway. This international presence reflects our global vision while maintaining authentic American streetwear roots. We serve a worldwide community of streetwear enthusiasts and crypto believers."
  },
  {
    question: "Is Hardlife Apparel a registered company?",
    answer: "Yes, Hardlife Apparel Company LTD is a legally registered business entity operating in Norway. We maintain full compliance with Norwegian business regulations and crypto asset reporting requirements. Our business registration number is available upon request for verification purposes. We operate with complete transparency and legal compliance."
  },
  {
    question: "How do I buy HRDLF Token?",
    answer: "Buying HRDLF is simple: 1) Get a Solana wallet (Phantom, Backpack, or Solflare), 2) Buy SOL on any major exchange (Coinbase, Binance, etc.), 3) Transfer SOL to your wallet, 4) Visit Moonshot.com and swap SOL for HRDLF using contract address B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon. The entire process takes less than 10 minutes, even for beginners."
  },
  {
    question: "How can I verify the HRDLF token contract?",
    answer: "You can verify the HRDLF token contract on Solscan.io by searching for our contract address: B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon. This blockchain explorer shows all transactions, holder distribution, liquidity, and contract details. The contract is fully transparent and auditable by anyone. Always verify the contract address before purchasing to ensure you're buying authentic HRDLF tokens."
  },
  {
    question: "What makes HRDLF different from other memecoins?",
    answer: "Unlike most memecoins, HRDLF is backed by a real brand with real products and a real community. Hardlife Apparel has been operating since 2006, creating authentic streetwear that represents resilience and urban culture. HRDLF token holders get exclusive benefits including early access to limited drops at HRDLF.com, discounts on merchandise, and governance rights in the brand's future direction. We also publish Hardwired Weekly newsletter and offer the Agent Mode AI automation course—creating a complete ecosystem."
  },
  {
    question: "What is the HRDLF ecosystem?",
    answer: "The HRDLF ecosystem consists of four interconnected properties: 1) HRDLFCOIN (crypto token on Solana), 2) HRDLF.com (Fourthwall apparel store with exclusive merchandise), 3) Hardwired Weekly (newsletter with exclusive updates and insights), and 4) Agent Mode (AI automation course). Each property reinforces the others, creating real utility and value for token holders beyond speculation."
  },
  {
    question: "What is the current market cap and price?",
    answer: "HRDLF currently has a market cap of approximately $5.1K with a price of $0.00000506861 per token. This represents an incredible ground-floor opportunity—you're getting in at the absolute beginning before mainstream adoption. The low market cap means massive growth potential for early holders. Check Solscan or Moonshot for real-time pricing."
  },
  {
    question: "Is HRDLF safe to invest in?",
    answer: "HRDLF is built on Solana, one of the most secure and fastest blockchains in crypto. The token contract is verified and auditable on Solscan. However, like all cryptocurrencies, HRDLF is highly volatile and carries significant risk. This is an experimental token and you should only invest what you can afford to lose. We operate with complete transparency, but cryptocurrency investments can result in total loss. Always do your own research before investing."
  },
  {
    question: "What are the tokenomics?",
    answer: "HRDLF has a total supply of 1 billion tokens. The distribution is designed for long-term sustainability: community allocation, liquidity pool, team tokens (locked), and marketing/development funds. There are no hidden wallets or rug-pull mechanisms. All tokenomics details are transparent and available in our whitepaper and on-chain via Solscan."
  },
  {
    question: "What benefits do HRDLF holders get?",
    answer: "HRDLF holders receive exclusive benefits including: 1) Early access to limited edition streetwear drops at HRDLF.com, 2) Discounts on Hardlife Apparel merchandise, 3) Governance rights to vote on brand decisions, 4) Priority access to Hardwired Weekly newsletter insights, 5) Exclusive community events and collaborations, 6) Future token utilities including staking and NFT access."
  },
  {
    question: "Where can I trade HRDLF?",
    answer: "HRDLF is currently available on Moonshot.com, the premier platform for discovering early-stage Solana projects. You can swap SOL for HRDLF directly on the platform with low fees and instant execution. We're actively working on listings for additional decentralized exchanges (DEXs) to increase liquidity and accessibility."
  },
  {
    question: "What is the roadmap for HRDLF?",
    answer: "Our roadmap includes: Phase 1 (Current) - Token launch and community building, Phase 2 - Exchange listings and partnerships, Phase 3 - Token utility expansion (staking, exclusive drops at HRDLF.com), Phase 4 - Metaverse integration and NFT collections, Phase 5 - Global brand expansion and charitable initiatives. We're committed to long-term growth and continuous innovation."
  },
  {
    question: "How can I join the HRDLF community?",
    answer: "Join our growing community on Discord (3,482+ members), follow us on Twitter/X (@HardLifeApparel), Instagram (@hardlifeapparelco), Telegram (t.me/hardlifehrdlf), and Reddit (r/HRDLF). Subscribe to our Hardwired Weekly newsletter for exclusive updates. The HRDLF community is a tight-knit group of streetwear enthusiasts, crypto believers, and culture creators who share the Hardlife vision."
  },
  {
    question: "How can I contact Hardlife Apparel?",
    answer: "You can reach us at contact@hrdlfcoin.com for general inquiries, partnership opportunities, or support questions. We're also active on all our social media channels (Twitter, Instagram, Discord, Telegram) and respond to community members regularly. For press inquiries or business partnerships, please use the same email with 'PRESS' or 'PARTNERSHIP' in the subject line."
  },
  {
    question: "What is Hardwired Weekly?",
    answer: "Hardwired Weekly is our exclusive newsletter directed by Brooks, delivering insider updates on HRDLF token developments, charitable impact reports, streetwear culture insights, and early access to limited merchandise drops. Subscribers get priority access to exclusive benefits and are the first to know about major announcements. Subscribe directly on hrdlfcoin.com."
  },
  {
    question: "What is Agent Mode?",
    answer: "Agent Mode is our AI automation course designed to help entrepreneurs and creators leverage artificial intelligence for business growth. Developed by Brooks and the Hardlife team, Agent Mode teaches practical AI skills for marketing, content creation, and automation. HRDLF token holders receive special discounts and early access to course updates."
  },
  {
    question: "Can I buy Hardlife merchandise with HRDLF tokens?",
    answer: "Currently, merchandise at HRDLF.com is purchased with traditional payment methods (credit cards, PayPal). However, HRDLF token holders receive exclusive early access to limited drops and special discounts. We're actively developing direct token-to-merchandise payment functionality for future releases. Token holders will be the first to access this feature when it launches."
  },
  {
    question: "Is there a minimum amount of HRDLF I need to hold?",
    answer: "There is no minimum holding requirement to own HRDLF tokens. However, certain exclusive benefits (like early access to merchandise drops and governance voting) may require holding a specific threshold amount. These thresholds will be announced to the community as utilities are rolled out. Every holder is a valued member of the Hardlife movement."
  },
  {
    question: "How does HRDLF support charitable causes?",
    answer: "Hardlife Apparel has a long history of supporting skateboarding communities and youth programs. A portion of HRDLF token transaction fees and merchandise sales is allocated to charitable initiatives focused on skateboarding access, youth empowerment, and urban arts programs. Hardwired Weekly newsletter provides regular impact reports showing exactly how funds are being used to give back to the community."
  },
  {
    question: "What is the connection between HRDLF and skateboarding?",
    answer: "Hardlife Apparel was born from skate culture in Philadelphia in 2006. Brooks, the founder, has deep roots in the skateboarding community and built the brand around the resilience and creativity of skate culture. HRDLF Token carries that DNA forward into Web3, supporting skateboarding initiatives and maintaining authentic connections to the skate community that inspired the brand."
  },
  {
    question: "Can I stake my HRDLF tokens?",
    answer: "Staking functionality is planned for Phase 3 of our roadmap. When staking launches, HRDLF holders will be able to lock their tokens to earn rewards, gain enhanced governance rights, and access premium benefits. Details on staking rewards, lock-up periods, and requirements will be announced to the community well in advance of the launch."
  },
  {
    question: "How do I know HRDLF isn't a rug pull?",
    answer: "Multiple factors protect against rug pulls: 1) Hardlife Apparel is a real company with 19 years of history and verifiable operations, 2) Brooks, the founder, is publicly identified with a real reputation to protect, 3) The token contract is fully transparent on Solscan, 4) Team tokens are locked with vesting schedules, 5) Liquidity is locked and verifiable on-chain. We operate with complete transparency because we're building for the long term."
  },
  {
    question: "What blockchain is HRDLF built on and why?",
    answer: "HRDLF is built on Solana blockchain for several key reasons: 1) Extremely fast transaction speeds (65,000+ TPS), 2) Low transaction fees (fractions of a cent), 3) Growing ecosystem of DeFi and NFT projects, 4) Strong developer community and infrastructure, 5) Environmentally friendly proof-of-stake consensus. Solana provides the perfect foundation for a high-utility token with real-world applications."
  },
  {
    question: "Will HRDLF be listed on major exchanges?",
    answer: "We're actively pursuing listings on major decentralized exchanges (DEXs) like Raydium and Orca, and exploring centralized exchange (CEX) opportunities. Exchange listings depend on meeting volume, liquidity, and compliance requirements. As our community grows and trading volume increases, we'll have stronger positioning for major exchange listings. Updates will be shared via Hardwired Weekly and social media."
  },
  {
    question: "What happens if I lose access to my wallet?",
    answer: "Cryptocurrency wallets are self-custodial, meaning you have complete control but also complete responsibility. If you lose your seed phrase or private keys, your HRDLF tokens cannot be recovered by anyone, including the Hardlife team. Always store your seed phrase securely offline, never share it with anyone, and consider using a hardware wallet for large holdings. We cannot reset passwords or recover lost wallets."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-24 relative">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 neon-glow" style={{ color: 'oklch(0.95 0.25 100)' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-neon-yellow via-neon-green to-neon-blue"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Everything you need to know about HRDLF Token, our ecosystem, and the Hardlife movement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 neon-border transition-all hover:border-neon-blue cursor-pointer"
                style={{ 
                  borderColor: openIndex === index ? 'oklch(0.75 0.25 240)' : 'oklch(0.75 0.25 240 / 0.3)',
                  boxShadow: openIndex === index ? '0 0 20px oklch(0.75 0.25 240 / 0.5)' : 'none'
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold flex-1">{faq.question}</h3>
                    <ChevronDown
                      className={`flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      style={{ color: 'oklch(0.75 0.25 240)' }}
                      size={24}
                    />
                  </div>
                  {openIndex === index && (
                    <div id={`faq-answer-${index}`} className="mt-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="mailto:contact@hrdlfcoin.com" 
              className="inline-block px-6 py-3 rounded-lg font-bold transition-all neon-glow-hover"
              style={{ 
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
