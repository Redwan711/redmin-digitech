import BlogPage from "@/pages/BlogPage";
import { getCategories, getAllPosts } from "@/lib/wp-api";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Engineering Blog & Technical Blueprints",
  description:
    "Insights on Headless WordPress, Next.js 16 engineering, 1688 API sourcing integrations, international logistics software, and high-concurrency architecture.",
  alternates: {
    canonical: "https://redmun.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Blueprints | Redmun Digitech",
    description:
      "Technical documentations, system blueprints, and architecture teardowns powered by Headless WordPress & Next.js ISR.",
    url: "https://redmun.com/blog",
    siteName: "Redmun Digitech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Technical Blueprints | Redmun Digitech",
    description: "Insights on Headless WordPress, Next.js engineering, and 1688 API integrations.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
];

export default async function Page() {
  const categories = await getCategories();
  const posts = await getAllPosts(20);

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogPage categories={categories} posts={posts} />
    </>
  );
}
