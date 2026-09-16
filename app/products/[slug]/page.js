import ProductDetailPage from "@/pages/ProductDetailPage";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareAppJsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";

const productCatalog = {
  "1688-api": {
    name: "1688 API Sourcing Portal",
    title: "1688 API Sourcing Platform | Redmun Digitech",
    description: "Automate China wholesale imports with direct 1688 catalog API sync, automated English/Bengali translation, currency conversion, and automated checkout.",
    image: "/1688-api-intragration (1).png",
    category: "BusinessApplication",
    price: "49",
    faqs: [
      {
        q: "How does real-time 1688 API syncing work?",
        a: "Our system runs background synchronization tasks that fetch exact supplier costs, stock levels, and item variations directly from 1688.com, automatically converting RMB to BDT.",
      },
      {
        q: "Can we track inventory across both China and BD warehouses?",
        a: "Yes. The platform includes a dual-warehouse barcode scanning system for intake, sorting, QC checks, and dispatch tracking.",
      },
      {
        q: "Does it support reseller accounts?",
        a: "Yes. Built-in reseller panels allow sub-merchants to browse, order, and track shipments with custom pricing margins and OTP verification.",
      },
    ],
  },
  "shipping-management": {
    name: "Shipping & Freight Management System",
    title: "Shipping & Freight Management System | Redmun Digitech",
    description: "End-to-end cargo manifest tracking, multi-warehouse barcode readers, dynamic freight pricing matrices, and automated customer dispatch alerts.",
    image: "/shipping-management.png",
    category: "LogisticsApplication",
    price: "99",
    faqs: [
      {
        q: "Can customers track their own parcels?",
        a: "Yes, customers get a dedicated self-service portal where they can create bookings, view live shipment status, download invoices, and receive automated SMS alerts.",
      },
      {
        q: "How are shipping tariffs calculated?",
        a: "The system features dynamic weight and volumetric dimensional weight calculation matrices supporting both Air Freight and Sea Cargo tariffs.",
      },
      {
        q: "Is barcode scanning supported on mobile devices?",
        a: "Yes. Our handheld scanner webhooks and mobile responsive interface allow warehouse staff in China and BD to scan parcels directly with phone cameras or Bluetooth scanners.",
      },
    ],
  },
  "restaurant-management": {
    name: "Restaurant Chain Management & POS Platform",
    title: "Restaurant Chain Management & POS Platform | Redmun Digitech",
    description: "Multi-outlet POS terminals, live kitchen display screens (KDS), thermal receipt printer drivers, central recipe inventory, and digital QR menu systems.",
    image: "/Restaurant-Chain-Management.png",
    category: "PointOfSaleApplication",
    price: "79",
    faqs: [
      {
        q: "Does the system support ESC/POS thermal receipt printers?",
        a: "Yes, our local network WebSocket bridge routes instant kitchen print orders directly to Star, Epson, and standard 80mm/58mm thermal printers.",
      },
      {
        q: "Can raw ingredients be auto-deducted per dish ordered?",
        a: "Yes. The central recipe database automatically deducts gram-level ingredients from warehouse stock when a cashier punches an order or a customer places a QR order.",
      },
      {
        q: "Can I manage multiple branch outlets from one central dashboard?",
        a: "Yes. Head office managers have real-time 24/7 visibility into sales figures, branch cash registers, inventory movement, and employee shifts.",
      },
    ],
  },
  "news-portal": {
    name: "Enterprise News Portal Platform",
    title: "Enterprise News Portal Platform | Redmun Digitech",
    description: "High-concurrency editorial CMS network built for sub-second page loads, instant Google News indexation, Algolia search, and dynamic ad placement.",
    image: "/mockup-laptop---.png",
    category: "PublishingApplication",
    price: "59",
    faqs: [
      {
        q: "How does the portal handle sudden breaking news traffic spikes?",
        a: "By decoupling the frontend (Next.js 16) from the WordPress CMS via edge-cached static pages (ISR), 100,000+ concurrent readers experience sub-30ms load times with zero server downtime.",
      },
      {
        q: "Does it support automated Google News schema pinging?",
        a: "Yes. NewsArticle JSON-LD schema and dynamic Google News XML sitemaps are generated instantly upon article publication.",
      },
      {
        q: "Can we integrate programmatic ads and header bidding?",
        a: "Yes. The architecture includes pre-configured Google Ad Manager slots, responsive interstitial spaces, and high-viewability banner anchors.",
      },
    ],
  },
  "ecommerce": {
    name: "General E-Commerce Platform",
    title: "General E-Commerce Platform | Redmun Digitech",
    description: "Decoupled Headless Commerce system with multi-gateway payments (bKash, Nagad, SSLCommerz, Stripe), vendor management panels, and flash-sale speed.",
    image: "/general-e-commerce--.png",
    category: "ShoppingApplication",
    price: "49",
    faqs: [
      {
        q: "Which courier APIs are integrated for automated shipping?",
        a: "Our single-vendor e-commerce core integrates directly with Pathao, Steadfast, and Paperfly courier APIs for one-click consignment creation.",
      },
      {
        q: "Does it include abandoned cart recovery?",
        a: "Yes. Automated SMS reminders and WhatsApp triggers automatically notify customers who dropped off during checkout.",
      },
      {
        q: "Can I create unlimited landing pages for Facebook Ads campaigns?",
        a: "Yes. You can deploy standalone high-converting sales funnels with custom checkout forms in seconds.",
      },
    ],
  },
  "branded-ecommerce": {
    name: "Custom Branded E-Commerce Solution",
    title: "Custom Branded E-Commerce Solution | Redmun Digitech",
    description: "Bespoke luxury and fashion storefronts with GSAP micro-animations, tailored checkout funnels, VIP customer loyalty portals, and 99.99% SLA uptime.",
    image: "/custom-e-commerce.png",
    category: "ShoppingApplication",
    price: "149",
    faqs: [
      {
        q: "How is custom branded e-commerce different from standard templates?",
        a: "Every interface component, transition animation, and checkout flow is designed bespoke for your brand aesthetic, running on a dedicated decoupled microservices stack.",
      },
      {
        q: "Does it support multi-currency and international payment gateways?",
        a: "Yes. We configure multi-currency auto-switching and integrate Stripe, PayPal, SSLCommerz, and regional payment gateways.",
      },
    ],
  },
  "company-profile": {
    name: "Corporate Profile & Lead Generation System",
    title: "Corporate Profile & Lead Generation System | Redmun Digitech",
    description: "SEO-optimized corporate web portal with multi-language i18n support, interactive lead capture forms, CRM integrations, and dynamic showcases.",
    image: "/company-profile1.png",
    category: "BusinessApplication",
    price: "39",
    faqs: [
      {
        q: "Can non-technical team members update team bios and case studies?",
        a: "Yes. Non-technical staff use an intuitive WordPress dashboard while customers experience a blazing-fast Next.js React frontend.",
      },
      {
        q: "Are lead forms connected to our corporate CRM?",
        a: "Yes. Form submissions route directly into HubSpot, Salesforce, or custom webhook endpoints with instant email and Slack alerts.",
      },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productCatalog[slug];

  if (!product) {
    const formattedSlug = slug === "1688-api" ? "1688 API Sourcing" : slug.replace(/-/g, " ");
    const capitalized = formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
    return {
      title: `${capitalized} Platform | Redmun Digitech`,
      description: "Enterprise digital platforms and custom software architectures by Redmun Digitech.",
      alternates: {
        canonical: `https://redmun.com/products/${slug}`,
      },
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `https://redmun.com/products/${slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://redmun.com/products/${slug}`,
      siteName: "Redmun Digitech",
      type: "website",
      images: [
        {
          url: product.image || "/Redmun-final.svg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image || "/Redmun-final.svg"],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = productCatalog[slug];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product ? product.name : slug, url: `/products/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      {product && (
        <>
          <SoftwareAppJsonLd
            name={product.name}
            description={product.description}
            slug={slug}
            category={product.category}
            price={product.price}
          />
          {product.faqs && <FaqJsonLd faqs={product.faqs} />}
        </>
      )}
      <ProductDetailPage slug={slug} />
    </>
  );
}
