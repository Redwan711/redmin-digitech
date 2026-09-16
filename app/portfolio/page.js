import PortfolioPage from "@/pages/PortfolioPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Corporate Systems Portfolio & Live Platform Deployments",
  description:
    "Review custom production systems designed by Redmun Digitech, including international cargo manifests, automated 1688 imports, POS terminals, and publishing portals.",
  alternates: {
    canonical: "https://redmun.com/portfolio",
  },
  openGraph: {
    title: "Corporate Systems Portfolio | Redmun Digitech",
    description:
      "Explore customized API portals, shipping dispatch matrices, kitchen printer POS scripts, and press portals built by our engineering teams.",
    url: "https://redmun.com/portfolio",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Systems Portfolio | Redmun Digitech",
    description: "Explore customized API portals, shipping dispatch matrices, and POS platforms.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PortfolioPage />
    </>
  );
}
