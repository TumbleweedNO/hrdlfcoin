import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — HRDLF | Hardlife Apparel Company LTD"
        description="Privacy Policy for HRDLF (Hardlife Apparel Company LTD). Learn how we collect, use, and protect your personal information."
        canonicalUrl="https://hrdlfcoin.com/privacy"
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-neon-blue/30">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/images/hrdlf-skull-logo.png" 
                alt="HRDLF Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-black tracking-wider" style={{ color: 'oklch(0.75 0.25 240)' }}>HRDLF</span>
            </a>
            <a 
              href="/"
              className="text-sm font-semibold hover:text-neon-blue transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 
              className="text-4xl sm:text-5xl font-black mb-8 text-center"
              style={{ color: 'oklch(0.75 0.25 240)' }}
            >
              Privacy Policy
            </h1>
            
            <div className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: January 17, 2025
            </div>

            <div className="space-y-8 text-foreground/90 leading-relaxed">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  1. Introduction
                </h2>
                <p className="mb-4">
                  Hardlife Apparel Company LTD ("HRDLF," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites (hrdlfcoin.com and hrdlf.com), use our services, or interact with us.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Personal Information</h3>
                <p className="mb-4">We may collect the following personal information:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Name and email address (when you subscribe to our newsletter or make a purchase)</li>
                  <li>Phone number (when you opt-in to SMS marketing)</li>
                  <li>Billing and shipping address (for product orders)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Wallet addresses (for cryptocurrency-related services)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Automatically Collected Information</h3>
                <p className="mb-4">When you visit our websites, we automatically collect:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Send SMS messages about promotions, updates, and offers (if you opt-in)</li>
                  <li>Improve our website and services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Analyze website traffic and user behavior</li>
                </ul>
              </section>

              {/* SMS/Text Messaging */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  4. SMS/Text Messaging
                </h2>
                <p className="mb-4">
                  If you opt-in to receive SMS messages from us, you consent to receive recurring automated marketing text messages at the phone number provided. Message frequency varies. Message and data rates may apply.
                </p>
                <p className="mb-4">
                  <strong>To opt-out:</strong> Reply STOP to any message to unsubscribe. Reply HELP for assistance.
                </p>
                <p>
                  We will not share your phone number with third parties for their marketing purposes without your explicit consent.
                </p>
              </section>

              {/* Sharing Your Information */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  5. Sharing Your Information
                </h2>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping carriers, email marketing platforms like Klaviyo, analytics providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze site traffic, and for marketing purposes. You can control cookie settings through your browser preferences.
                </p>
                <p>
                  Types of cookies we use: Essential cookies (required for site functionality), Analytics cookies (to understand how visitors use our site), and Marketing cookies (to deliver relevant advertisements).
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  7. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  8. Your Rights
                </h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at <a href="mailto:hardlifeapparelcompany@gmail.com" className="text-neon-blue hover:underline">hardlifeapparelcompany@gmail.com</a>.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  9. Third-Party Links
                </h2>
                <p>
                  Our websites may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  10. Children's Privacy
                </h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  11. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  12. Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-card/50 border border-neon-blue/30 rounded-lg p-6">
                  <p className="font-bold text-lg mb-2">Hardlife Apparel Company LTD</p>
                  <p>Email: <a href="mailto:hardlifeapparelcompany@gmail.com" className="text-neon-blue hover:underline">hardlifeapparelcompany@gmail.com</a></p>
                  <p>Website: <a href="https://hrdlf.com" className="text-neon-blue hover:underline">hrdlf.com</a></p>
                  <p className="mt-2 text-muted-foreground">Philadelphia, PA, USA</p>
                </div>
              </section>

            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-neon-blue/30 py-8 px-4">
          <div className="container mx-auto text-center text-muted-foreground text-sm">
            <p>© 2025 Hardlife Apparel Company LTD. All rights reserved.</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="/" className="hover:text-neon-blue transition-colors">Home</a>
              <a href="/privacy" className="text-neon-blue">Privacy Policy</a>
              <a href="/verify" className="hover:text-neon-blue transition-colors">Verify</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
