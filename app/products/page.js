import ProductsPage from "@/pages/ProductsPage";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Specialized Software Platforms & Digital Products",
  description:
    "Explore our seven specialized enterprise software platforms: automated 1688 importing, cargo freight manifests, restaurant POS chains, headless CMS media portals, and custom e-commerce.",
  alternates: {
    canonical: "https://redmun.com/products",
  },
  openGraph: {
    title: "Specialized Software Platforms & Digital Products | Redmun Digitech",
    description:
      "Seven production-ready digital architectures designed to automate operations, control supply chains, and scale revenue.",
    url: "https://redmun.com/products",
  },
};

const productsFaqs = [
  {
    q: "Can we combine the Sourcing Platform and Shipping Management?",
    a: "Yes. Our systems are built modularly. You can sync the 1688 API Sourcing portal directly with the Shipping Management system to calculate weight-based dispatch costs automatically for final deliveries.",
  },
  {
    q: "How do we modify product details?",
    a: "All catalog data is saved securely in your decoupled Headless WordPress database. You can add new products, adjust margins, and edit text inside the WordPress Admin Dashboard. The updates appear instantly on the Next.js frontend.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
];

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd faqs={productsFaqs} />
      <ProductsPage />
    </>
  );
}
