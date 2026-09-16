import ContactPage from "@/pages/ContactPage";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Contact Operations Desk & Engineering Scoping",
  description:
    "Get in touch with Redmun Digitech. Fill out our technical scoping brief, call our operations desk (+880 1711 994608), or book a 15-minute scoping call.",
  alternates: {
    canonical: "https://redmun.com/contact",
  },
  openGraph: {
    title: "Contact Operations Desk | Redmun Digitech",
    description:
      "Have an enterprise integration project, custom shipping portal, or wholesale catalog query? Get in touch with our operations desk.",
    url: "https://redmun.com/contact",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Operations Desk | Redmun Digitech",
    description: "Reach Redmun Digitech operations desk for engineering scoping and platform quotes.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <LocalBusinessJsonLd />
      <ContactPage />
    </>
  );
}
