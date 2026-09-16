import CaseStudiesPage from "@/pages/CaseStudiesPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Enterprise Case Studies & Architectural Outcomes",
  description:
    "Review operational results, tech stacks, and detailed outcomes of platforms engineered by Redmun Digitech across media publishing, 1688 wholesale sourcing, and restaurant POS networks.",
  alternates: {
    canonical: "https://redmun.com/case-studies",
  },
  openGraph: {
    title: "Enterprise Case Studies & Architectural Outcomes | Redmun Digitech",
    description:
      "Documented outcomes: Scaling breaking news to 10M+ readers, automated 1688 China sourcing portals, and omnichannel POS ecosystems.",
    url: "https://redmun.com/case-studies",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Case Studies | Redmun Digitech",
    description: "Explore documented architectural case studies and results from Redmun Digitech.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Case Studies", url: "/case-studies" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CaseStudiesPage />
    </>
  );
}
