import BlogPostPage from "@/pages/BlogPostPage";
import { getPostBySlug, getAllPosts } from "@/lib/wp-api";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Redmun Digitech Blog",
      description: "The requested engineering writeup or technical guide could not be located.",
    };
  }

  const { seo, title, excerpt, featuredImage, extraPostDetails } = post;

  const metaTitle = seo?.title || `${title} | Redmun Digitech Engineering Blog`;
  const metaDesc =
    seo?.metaDesc ||
    extraPostDetails?.subTitle ||
    excerpt?.replace(/<[^>]+>/g, "").trim().slice(0, 160) ||
    `Read the complete article ${title} on Redmun Digitech Blog.`;

  const canonicalUrl = seo?.canonical || `https://redmun.com/blog/${slug}`;
  const ogTitle = seo?.opengraphTitle || metaTitle;
  const ogDesc = seo?.opengraphDescription || metaDesc;
  const ogImage =
    seo?.opengraphImage?.sourceUrl ||
    featuredImage?.node?.sourceUrl ||
    featuredImage?.sourceUrl ||
    "/Redmun-final.svg";

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalUrl,
      siteName: "Redmun Digitech",
      type: "article",
      images: [
        {
          url: ogImage,
          alt: featuredImage?.node?.altText || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDesc,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts(10);
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const category = post?.categories?.nodes?.[0] || { name: "Engineering", slug: "engineering" };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: category.name, url: `/blog/category/${category.slug}` },
    { name: post?.title || slug, url: `/blog/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      {post && <ArticleJsonLd post={post} slug={slug} />}
      <BlogPostPage post={post} relatedPosts={relatedPosts} />
    </>
  );
}
