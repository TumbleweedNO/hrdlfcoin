import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  breadcrumbs?: BreadcrumbItem[];
  additionalSchemas?: Record<string, unknown>[];
}

export default function SEO({
  title = "HRDLFcoin | Streetwear Brand Token on Solana | Own a Piece of Hardlife Apparel Company",
  description = "HRDLFcoin — the official token of Hardlife Apparel Company on Solana. Own a piece of Philadelphia's most independent streetwear brand. Est. 2006. First 100 holders go in The Archive permanently.",
  keywords = "HRDLF coin, streetwear token Solana, fashion brand crypto token, streetwear digital collectible, buy HRDLF token, Hardlife Apparel coin, Solana streetwear token, fashion brand community coin, HRDLF founding member coin",
  ogTitle,
  ogDescription,
  ogImage = "https://hrdlfcoin.com/assets/og-coin.jpg",
  ogType = "website",
  canonicalUrl = "https://hrdlfcoin.com",
  breadcrumbs,
  additionalSchemas,
}: SEOProps) {
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hrdlfcoin.com/#organization",
    "name": "Hardlife Apparel Company LTD",
    "alternateName": "HRDLF",
    "url": "https://hrdlfcoin.com",
    "logo": "https://hrdlfcoin.com/images/official-skull-logo.jpg",
    "foundingDate": "2006",
    "description": "Authentic streetwear brand with 18 years of history, bridging fashion and Web3 through the HRDLF Token. Trade on Moonshot app.",
    "sameAs": [
      "https://hardlifeapparelco.com",
      "https://hrdlf.com",
      "https://twitter.com/HardLifeApparel",
      "https://instagram.com/hardlifeapparel",
      "https://tiktok.com/@hardlifeapparel",
      "https://discord.gg/buUpxPTe",
      "https://t.me/hardlifehrdlf",
      "https://dexscreener.com/solana/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon",
      "https://raydium.io/swap/?inputMint=sol&outputMint=B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@hardlifeapparelco.com"
    }
  };

  // Product Schema for HRDLF Token
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://hrdlfcoin.com/#product",
    "name": "HRDLFcoin",
    "url": "https://hrdlfcoin.com",
    "description": "The official token of Hardlife Apparel Company on Solana. Own a piece of Philadelphia's most independent streetwear brand. Est. 2006.",
    "image": "https://hrdlfcoin.com/images/official-skull-logo.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Hardlife Apparel Company",
      "url": "https://hrdlf.com"
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Blockchain", "value": "Solana" },
      { "@type": "PropertyValue", "name": "Brand Founded", "value": "2006" },
      { "@type": "PropertyValue", "name": "Founding Holders Archive", "value": "First 100 wallets permanently recorded" }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://moonshot.com",
      "seller": {
        "@type": "Organization",
        "name": "Hardlife Apparel Company"
      }
    },
    "sku": "HRDLF-TOKEN-SOL",
    "mpn": "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon"
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hrdlfcoin.com/#website",
    "name": "HRDLF Token",
    "url": "https://hrdlfcoin.com",
    "description": "Official website for HRDLF Token - The intersection of streetwear culture and crypto innovation. Buy on Moonshot app.",
    "publisher": {
      "@type": "Organization",
      "name": "Hardlife Apparel Company LTD"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hrdlfcoin.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema - dynamic based on props
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "https://hrdlfcoin.com" }
  ];
  const breadcrumbItems = breadcrumbs || defaultBreadcrumbs;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  // FinancialProduct Schema for better crypto representation
  const financialProductSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "HRDLF Token",
    "description": "Solana-based cryptocurrency token backed by Hardlife Apparel Company LTD. Buy instantly on Moonshot app for iOS and Android.",
    "provider": {
      "@type": "Organization",
      "name": "Hardlife Apparel Company LTD"
    },
    "url": "https://hrdlfcoin.com",
    "feesAndCommissionsSpecification": "Standard Solana network fees apply."
  };

  // MobileApplication Schema for Moonshot
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Moonshot",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "FinanceApplication",
    "description": "Download Moonshot app to buy HRDLF token instantly with card or crypto",
    "url": "https://moonshot.com",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <Helmet>
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="1FOXM-XicDQ2t-Ae4O0fqwyEdUDFZ-pnWguG6cTtenM" />

      {/* Bing Webmaster Verification */}
      <meta name="msvalidate.01" content="PENDING_BING_VERIFICATION_CODE" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="HRDLFcoin" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={resolvedOgTitle} />
      <meta property="twitter:description" content={resolvedOgDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@HardLifeApparel" />
      <meta property="twitter:creator" content="@HardLifeApparel" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Hardlife Apparel Company LTD" />
      <meta name="copyright" content="Hardlife Apparel Company LTD" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#4169e1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://moonshot.com" />
      <link rel="dns-prefetch" href="https://solscan.io" />
      <link rel="dns-prefetch" href="https://hardlifeapparelco.com" />
      <link rel="dns-prefetch" href="https://hrdlf.com" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(financialProductSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(mobileAppSchema)}
      </script>
      {additionalSchemas?.map((schema, index) => (
        <script key={`additional-schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
