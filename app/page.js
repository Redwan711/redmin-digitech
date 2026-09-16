import HomePage from "@/pages/HomePage";
import { FaqJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Redmun Digitech | Enterprise Management & Automation Platforms",
  description:
    "Enterprise management platforms built for growing businesses. Specialized digital architectures for 1688 API wholesale sourcing, international shipping manifests, restaurant POS chains, and headless e-commerce.",
  alternates: {
    canonical: "https://redmun.com",
  },
  openGraph: {
    title: "Redmun Digitech | Enterprise Management & Automation Platforms",
    description:
      "Enterprise management platforms built for growing businesses. Automated 1688 sourcing systems, cargo manifests, and decoupled headless architectures.",
    url: "https://redmun.com",
  },
};

const homeFaqs = [
  {
    q: "How does the 1688 API platform automate product sourcing?",
    a: "Our system pulls raw product data (images, specifications, and pricing) directly from 1688.com's API, translates everything automatically using premium language models, applies your margin rules, and publishes catalog-ready listings in seconds.",
  },
  {
    q: "Can Headless WordPress handle high-traffic surges?",
    a: "Yes. By separating the frontend (Next.js 16) from the backend (WordPress), static pages are served directly from Cloudflare edge caches in under 50ms, while WordPress only handles authenticated API requests.",
  },
  {
    q: "Do you offer flexible pricing for growing businesses?",
    a: "Absolutely. Every platform is modular, allowing you to launch with core features and incrementally unlock advanced modules (analytics, multi-warehouse, API access) as your operations scale.",
  },
  {
    q: "What security measures protect customer and order data?",
    a: "We implement zero-trust API architecture, SSL encryption, rate limiting, automated cloud backups, and isolate WordPress from public web traffic.",
  },
  {
    q: "Is every platform fully mobile responsive?",
    a: "All components are built mobile-first using fluid grid systems and tested across iOS, Android, tablets, and high-DPI desktop displays. Touch interactions and viewport scaling are tuned for each breakpoint.",
  },
  {
    q: "How secure are your deployed platforms?",
    a: "By decoupling the frontend from the database via server-side rendering, direct SQL injection vectors are eliminated. All communication uses HTTPS with encrypted API handshakes, and admin panels are IP-restricted.",
  },
  {
    q: "What is a typical project timeline?",
    a: "A corporate profile site takes 2 to 3 weeks. A complex 1688 sourcing platform or shipping ERP takes 6 to 8 weeks. Enterprise custom builds with multiple integrations typically take 10 to 14 weeks.",
  },
  {
    q: "Can restaurant orders print to thermal receipt printers?",
    a: "Yes. Our restaurant management system integrates directly with ESC/POS thermal printers over local network gateways, supporting instant kitchen ticket printing and receipt generation.",
  },
  {
    q: "Do you provide hosting and post-launch maintenance?",
    a: "We deploy to modern cloud infrastructure (Vercel, AWS, or Docker hosts) and offer tiered SLA support packages including uptime monitoring, security patches, and feature iterations.",
  },
  {
    q: "Can existing website content be migrated without losing SEO?",
    a: "Yes. We write custom migration scripts that safely transfer databases, media assets, and URL structures while preserving existing search rankings through proper 301 redirect mapping.",
  },
];

export default function Page() {
  return (
    <>
      <FaqJsonLd faqs={homeFaqs} />
      <HomePage />
    </>
  );
}
