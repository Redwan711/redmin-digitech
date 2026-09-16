import RequestDemoPage from "@/pages/RequestDemoPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Request Live Platform Demo & Technical Walkthrough",
  description:
    "Schedule a 1-on-1 technical scoping demo with Redmun Digitech. See live integrations for 1688 API sourcing, cargo shipping manifests, and restaurant POS networks.",
  alternates: {
    canonical: "https://redmun.com/request-demo",
  },
  openGraph: {
    title: "Request Live Platform Demo | Redmun Digitech",
    description:
      "Schedule a 1-on-1 walkthrough to inspect live API bridges, dual warehouse barcode modules, and decoupled headless architectures.",
    url: "https://redmun.com/request-demo",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Live Platform Demo | Redmun Digitech",
    description: "Schedule a 1-on-1 technical scoping walkthrough with Redmun Digitech engineers.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Request Demo", url: "/request-demo" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <RequestDemoPage />
    </>
  );
}
