import AboutPage from "@/pages/AboutPage";
import { BreadcrumbJsonLd, AboutPageJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "About Us | Enterprise Business Platforms Development Company",
  description:
    "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
  alternates: {
    canonical: "https://redmun.com/about",
  },
  openGraph: {
    title: "About Us | Enterprise Business Platforms Development Company | Redmun Digitech",
    description:
      "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
    url: "https://redmun.com/about",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Enterprise Business Platforms Development Company | Redmun Digitech",
    description:
      "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
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
      <AboutPageJsonLd />
      <AboutPage />
    </>
  );
}
