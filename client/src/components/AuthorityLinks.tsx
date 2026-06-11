import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AuthorityLinksProps {
  exclude?: string[];
}

const links = [
  {
    label: "About Hardlife Apparel",
    url: "https://hardlifeapparelco.com/about/",
    property: "hardlifeapparelco.com",
  },
  {
    label: "Hardwired Weekly Newsletter",
    url: "https://hardlifeapparelco.com/hardwired-weekly/",
    property: "hardlifeapparelco.com",
  },
  {
    label: "Brand Blog",
    url: "https://hardlifeapparelco.com/blog/",
    property: "hardlifeapparelco.com",
  },
  {
    label: "HRDLF Token FAQ",
    url: "https://hrdlfcoin.com/faq",
    property: "hrdlfcoin.com",
  },
  {
    label: "Verification Center",
    url: "https://hrdlfcoin.com/verify",
    property: "hrdlfcoin.com",
  },
  {
    label: "Join the Movement",
    url: "https://hrdlfcoin.com/join",
    property: "hrdlfcoin.com",
  },
  {
    label: "HRDLF Whitepaper",
    url: "https://hrdlfcoin.com/HRDLF_Whitepaper.md",
    property: "hrdlfcoin.com",
  },
  {
    label: "Shop HRDLF Apparel",
    url: "https://hrdlf.com",
    property: "hrdlf.com",
  },
];

export default function AuthorityLinks({ exclude = [] }: AuthorityLinksProps) {
  const filtered = links.filter((link) => !exclude.includes(link.url));

  return (
    <section className="py-16 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-black mb-8 text-center neon-glow"
            style={{ color: "oklch(0.75 0.25 240)" }}
          >
            Explore the HRDLF Ecosystem
          </h2>
          <Card
            className="bg-card/50 backdrop-blur-sm border-2 neon-border"
            style={{ borderColor: "oklch(0.75 0.25 240 / 0.4)" }}
          >
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {filtered.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith("https://hrdlfcoin.com") ? undefined : "_blank"}
                    rel={link.url.startsWith("https://hrdlfcoin.com") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neon-blue/10 transition-colors group"
                  >
                    <ExternalLink
                      className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ color: "oklch(0.75 0.25 240)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-bold group-hover:text-neon-blue transition-colors">
                        {link.label}
                      </span>
                      <span className="block text-xs text-muted-foreground truncate">
                        {link.property}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
