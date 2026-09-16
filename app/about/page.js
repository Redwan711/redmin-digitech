import AboutPage from "@/pages/AboutPage";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "About Us & Engineering Principles",
  description:
    "Learn about Redmun Digitech's software engineering principles, 1688 sourcing automation mission, operational timeline, and team architects.",
  alternates: {
    canonical: "https://redmun.com/about",
  },
  openGraph: {
    title: "About Us & Engineering Principles | Redmun Digitech",
    description:
      "Decoupled software engineering firm building scalable digital platforms for cross-border sourcing, freight logistics, and enterprise commerce.",
    url: "https://redmun.com/about",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Engineering Principles | Redmun Digitech",
    description: "Learn about Redmun Digitech's mission, engineering principles, and team architects.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <AboutPage />
    </>
  );
}
