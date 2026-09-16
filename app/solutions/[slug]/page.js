import { redirect, notFound } from "next/navigation";

const solutionProductRedirects = {
  "import-logistics": "/products/shipping-management",
  "media-editorial": "/products/news-portal",
  "restaurant-chains": "/products/restaurant-management",
  "corporate-erp": "/products/company-profile",
  "retail-automation": "/products/ecommerce",
  "1688-sourcing": "/products/1688-api",
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const target = solutionProductRedirects[slug];

  if (target) {
    return {
      title: "Redirecting to Solution Platform...",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: "Solution Not Found | Redmun Digitech",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const target = solutionProductRedirects[slug];

  if (target) {
    redirect(target);
  }

  notFound();
}
