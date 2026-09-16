import IndustriesPage from "@/pages/IndustriesPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Industry Verticals & Digital Solutions",
  description:
    "Explore Redmun Digitech vertical software solutions tailored for Media & Press, China Wholesale Import, Shipping Freight Logistics, Restaurant Chains, and Retail E-Commerce.",
  alternates: {
    canonical: "https://redmun.com/industries",
  },
  openGraph: {
    title: "Industry Verticals & Digital Solutions | Redmun Digitech",
    description:
      "Pre-configured database schemas, API connectors, and decoupled architectures engineered specifically for your vertical sector.",
    url: "https://redmun.com/industries",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Verticals & Solutions | Redmun Digitech",
    description: "Industry-specific enterprise architectures engineered by Redmun Digitech.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Industries", url: "/industries" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <IndustriesPage />
    </>
  );
}
