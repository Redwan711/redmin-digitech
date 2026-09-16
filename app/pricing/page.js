import PricingPage from "@/pages/PricingPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Transparent Pricing Tiers & Modular Investment Plans",
  description:
    "Explore transparent modular pricing for Redmun Digitech enterprise software solutions, 1688 API platforms, shipping manifests, and POS restaurant management.",
  alternates: {
    canonical: "https://redmun.com/pricing",
  },
  openGraph: {
    title: "Pricing Tiers & Investment Plans | Redmun Digitech",
    description:
      "No hidden fees. Transparent, modular investment plans designed for your operational scale, from single-branch setups to enterprise architectures.",
    url: "https://redmun.com/pricing",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Tiers & Investment Plans | Redmun Digitech",
    description: "Explore modular pricing tiers for 1688 API portals, shipping ERPs, and POS networks.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Pricing", url: "/pricing" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PricingPage />
    </>
  );
}
