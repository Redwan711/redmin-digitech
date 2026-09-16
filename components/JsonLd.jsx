import React from "react";

/**
 * Organization and Corporation Schema JSON-LD
 * Includes NAP (Name, Address, Phone), logo, social links, and alternate names for brand SEO.
 */
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://redmun.com/#organization",
    "name": "Redmun Digitech",
    "alternateName": [
      "Redmin Digitech",
      "Redmun",
      "Redmin",
      "Redmun Digital Technologies"
    ],
    "url": "https://redmun.com",
    "logo": "https://redmun.com/Redmun-final.svg",
    "description": "Enterprise software engineering firm specializing in automated 1688 sourcing systems, headless web architecture, logistics management, and POS networks.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 20, Road 12, Sector 03, Uttara",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "postalCode": "1230",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801711994608",
      "contactType": "customer service",
      "areaServed": ["BD", "Global"],
      "availableLanguage": ["English", "Bengali"]
    },
    "sameAs": [
      "https://www.facebook.com/redmundigitech",
      "https://www.linkedin.com/company/redmundigitech/",
      "https://www.instagram.com/redmun.dtc/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema with Sitelinks Searchbox
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://redmun.com/#website",
    "url": "https://redmun.com",
    "name": "Redmun Digitech",
    "publisher": {
      "@id": "https://redmun.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://redmun.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Schema JSON-LD
 * Enables Google Search expandable accordion rich snippets.
 */
export function FaqJsonLd({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * SoftwareApplication / Product Schema JSON-LD
 * For individual specialized platform pages.
 */
export function SoftwareAppJsonLd({ name, description, slug, category = "BusinessApplication", price = "49" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "url": `https://redmun.com/products/${slug}`,
    "description": description,
    "applicationCategory": category,
    "operatingSystem": "All, Web, Cloud",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@id": "https://redmun.com/#organization"
    },
    "provider": {
      "@id": "https://redmun.com/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Article / BlogPosting Schema JSON-LD
 * For single blog posts.
 */
export function ArticleJsonLd({ post, slug }) {
  if (!post) return null;

  const title = post.title || "";
  const excerpt = post.extraPostDetails?.subTitle || post.excerpt?.replace(/<[^>]+>/g, "").trim() || title;
  const rawImage =
    post.featuredImage?.node?.sourceUrl ||
    post.featuredImage?.sourceUrl ||
    "https://redmun.com/Redmun-final.svg";

  const publishedDate = post.date ? new Date(post.date).toISOString() : new Date().toISOString();
  const authorName =
    !post.author?.node?.name || post.author?.node?.name.toLowerCase() === "admin"
      ? "Redmun Engineering Team"
      : post.author.node.name;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": excerpt,
    "url": `https://redmun.com/blog/${slug}`,
    "image": rawImage,
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@id": "https://redmun.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://redmun.com/blog/${slug}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema JSON-LD
 * Enables breadcrumb navigation paths in Google SERPs.
 */
export function BreadcrumbJsonLd({ items }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://redmun.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness / ContactPage Schema JSON-LD
 */
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://redmun.com/#localbusiness",
    "name": "Redmun Digitech Operations Desk",
    "image": "https://redmun.com/Redmun-final.svg",
    "url": "https://redmun.com/contact",
    "telephone": "+8801711994608",
    "email": "contact@redmun.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House 20, Road 12, Sector 03, Uttara",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "postalCode": "1230",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.8697,
      "longitude": 90.3986
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/redmundigitech",
      "https://www.linkedin.com/company/redmundigitech/",
      "https://www.instagram.com/redmun.dtc/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
