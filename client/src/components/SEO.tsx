import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title = "HRDLF Token - Buy on Moonshot | Streetwear Meets Crypto",
  description = "Buy HRDLF token on Moonshot app. 18 years of streetwear culture meets Solana blockchain. Official token by Hardlife Apparel Company LTD.",
  keywords = "HRDLF token, Hardlife Apparel, streetwear crypto, Solana token, Moonshot, buy HRDLF, memecoin",
  ogImage = "https://hrdlfcoin.com/images/hrdlf-og-image.jpg",
  ogType = "website",
  canonicalUrl = "https://hrdlfcoin.com"
}: SEOProps) {
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hardlife Apparel Company LTD",
    "alternateName": "HRDLF",
    "url": "https://hrdlfcoin.com",
    "logo": "https://hrdlfcoin.com/images/official-skull-logo.jpg",
    "foundingDate": "2006",
    "description": "Authentic streetwear brand with 18 years of history, bridging fashion and Web3 through the HRDLF Token. Trade on Moonshot app.",
    "sameAs": [
      "https://twitter.com/HardLifeApparel",
      "https://instagram.com/hardlifeapparel",
      "https://discord.gg/buUpxPTe",
      "https://t.me/hardlifehrdlf",
      "https://moonshot.com",
      "https://solscan.io/token/B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon"
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
    "name": "HRDLF Token",
    "url": "https://hrdlfcoin.com",
    "description": "Cryptocurrency token representing ownership in the Hardlife movement. Built on Solana blockchain. Buy instantly on Moonshot app for iOS and Android.",
    "image": "https://hrdlfcoin.com/images/official-skull-logo.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Hardlife Apparel Company LTD",
      "url": "https://hrdlf.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00000517816",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://moonshot.com",
      "priceValidUntil": "2026-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Hardlife Apparel Company LTD"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sku": "HRDLF-TOKEN-SOL",
    "mpn": "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon"
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
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

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hrdlfcoin.com",
        "url": "https://hrdlfcoin.com"
      }
    ]
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
      
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="HRDLF Token" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
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
    </Helmet>
  );
}
