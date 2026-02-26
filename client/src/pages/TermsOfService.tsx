import SEO from "@/components/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Mobile Terms of Service — HRDLF | Hardlife Apparel Company LTD"
        description="Mobile Terms of Service for HRDLF SMS/text messaging service by Hardlife Apparel Company LTD."
        keywords="HRDLF terms of service, Hardlife Apparel terms, SMS terms, HRDLF token terms"
        canonicalUrl="https://hrdlfcoin.com/terms"
        breadcrumbs={[
          { name: "Home", url: "https://hrdlfcoin.com" },
          { name: "Terms of Service", url: "https://hrdlfcoin.com/terms" }
        ]}
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
              Mobile Terms of Service
            </h1>
            
            <div className="text-center mb-4">
              <p className="text-xl font-semibold">Hardlife Apparel Company LTD</p>
            </div>
            
            <div className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: January 17, 2025
            </div>

            <div className="space-y-8 text-foreground/90 leading-relaxed">
              
              {/* Introduction */}
              <section>
                <p className="mb-6">
                  The Hardlife Apparel Company LTD mobile message service (the "Service") is operated by Hardlife Apparel Company LTD ("Hardlife Apparel Company LTD", "we", or "us"). Your use of the Service constitutes your agreement to these terms and conditions ("Mobile Terms"). We may modify or cancel the Service or any of its features without notice. To the extent permitted by applicable law, we may also modify these Mobile Terms at any time and your continued use of the Service following the effective date of any such changes shall constitute your acceptance of such changes.
                </p>
              </section>

              {/* Consent to SMS */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Consent to Receive SMS/Text Messages
                </h2>
                <p className="mb-4">
                  By consenting to Hardlife Apparel Company LTD's SMS/text messaging service, you agree to receive recurring SMS/text messages from and on behalf of Hardlife Apparel Company LTD through your wireless provider to the mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list. Text messages may be sent using an automatic telephone dialing system or other technology.
                </p>
                <p className="mb-4">
                  <strong>Service-related messages</strong> may include updates, alerts, and information (e.g., order updates, account alerts, etc.).
                </p>
                <p>
                  <strong>Promotional messages</strong> may include promotions, specials, and other marketing offers (e.g., cart reminders).
                </p>
              </section>

              {/* Voluntary Participation */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Voluntary Participation
                </h2>
                <p>
                  You understand that you do not have to sign up for this program in order to make any purchases, and your consent is not a condition of any purchase with Hardlife Apparel Company LTD. Your participation in this program is completely voluntary.
                </p>
              </section>

              {/* Costs and Charges */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Costs and Charges
                </h2>
                <p>
                  We do not charge for the Service, but you are responsible for all charges and fees associated with text messaging imposed by your wireless provider. Message frequency varies. Message and data rates may apply. Check your mobile plan and contact your wireless provider for details. You are solely responsible for all charges related to SMS/text messages, including charges from your wireless provider.
                </p>
              </section>

              {/* Opt-Out */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  How to Opt-Out
                </h2>
                <p className="mb-4">
                  You may opt-out of the Service at any time. Text the single keyword command <strong>STOP</strong> to <strong>HRDLF</strong> or click the unsubscribe link (where available) in any text message to cancel. You'll receive a one-time opt-out confirmation text message. No further messages will be sent to your mobile device, unless initiated by you.
                </p>
                <p>
                  If you have subscribed to other Hardlife Apparel Company LTD mobile message programs and wish to cancel, except where applicable law requires otherwise, you will need to opt out separately from those programs by following the instructions provided in their respective mobile terms.
                </p>
              </section>

              {/* Support */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Support
                </h2>
                <p>
                  For Service support or assistance, text <strong>HELP</strong> to <strong>HRDLF</strong> or email <a href="mailto:hardlifeapparelcompany@gmail.com" className="text-neon-blue hover:underline">hardlifeapparelcompany@gmail.com</a>.
                </p>
              </section>

              {/* Changes to Short Code */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Changes to Short Code or Phone Number
                </h2>
                <p>
                  We may change any short code or telephone number we use to operate the Service at any time and will notify you of these changes. You acknowledge that any messages, including any STOP or HELP requests, you send to a short code or telephone number we have changed may not be received and we will not be responsible for honoring requests made in such messages.
                </p>
              </section>

              {/* Carrier Liability */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Wireless Carrier Liability
                </h2>
                <p>
                  The wireless carriers supported by the Service are not liable for delayed or undelivered messages. You agree to provide us with a valid mobile number. If you get a new mobile number, you will need to sign up for the program with your new number.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Limitation of Liability
                </h2>
                <p>
                  To the extent permitted by applicable law, you agree that we will not be liable for failed, delayed, or misdirected delivery of any information sent through the Service, any errors in such information, and/or any action you may or may not take in reliance on the information or Service.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'oklch(0.65 0.30 340)' }}>
                  Privacy
                </h2>
                <p>
                  We respect your right to privacy. To see how we collect and use your personal information, please see our <a href="/privacy" className="text-neon-blue hover:underline">Privacy Policy</a>.
                </p>
              </section>

              {/* Quick Reference Box */}
              <section className="mt-12">
                <div className="bg-card/50 border border-neon-blue/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'oklch(0.75 0.25 240)' }}>Quick Reference</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-1">To Opt-Out:</p>
                      <p className="text-muted-foreground">Text <strong>STOP</strong> to HRDLF</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">For Help:</p>
                      <p className="text-muted-foreground">Text <strong>HELP</strong> to HRDLF</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email Support:</p>
                      <p className="text-muted-foreground"><a href="mailto:hardlifeapparelcompany@gmail.com" className="text-neon-blue hover:underline">hardlifeapparelcompany@gmail.com</a></p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Message Frequency:</p>
                      <p className="text-muted-foreground">Varies</p>
                    </div>
                  </div>
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
              <a href="/privacy" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-neon-blue">Terms of Service</a>
              <a href="/verify" className="hover:text-neon-blue transition-colors">Verify</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
