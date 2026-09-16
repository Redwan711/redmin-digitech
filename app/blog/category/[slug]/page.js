import BlogCategoryPage from "@/pages/BlogCategoryPage";
import { getCategories, getPostsByCategory } from "@/lib/wp-api";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const matchedCategory = categories.find((c) => c.slug === slug);
  const categoryName = matchedCategory ? matchedCategory.name : slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `${categoryName} Articles & Architecture Guides`,
    description: `Read technical writeups, system blueprints, and digital supply guides on ${categoryName} written by Redmun Digitech software engineers.`,
    alternates: {
      canonical: `https://redmun.com/blog/category/${slug}`,
    },
    openGraph: {
      title: `${categoryName} Articles & Architecture Guides | Redmun Digitech Blog`,
      description: `Technical insights and integration blueprints under ${categoryName}.`,
      url: `https://redmun.com/blog/category/${slug}`,
      siteName: "Redmun Digitech",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Articles & Guides | Redmun Digitech Blog`,
      description: `Technical insights and integration blueprints under ${categoryName}.`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const posts = await getPostsByCategory(slug);
  const matchedCategory = categories.find((c) => c.slug === slug) || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    slug,
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: matchedCategory.name, url: `/blog/category/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogCategoryPage category={matchedCategory} posts={posts} categories={categories} />
    </>
  );
}
