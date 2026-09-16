import { getAllPosts, getCategories } from "@/lib/wp-api";

/**
 * Next.js Dynamic XML Sitemap Generator
 * Generates dynamic URL entries for static pages, products, blog articles, and categories.
 */
export default async function sitemap() {
  const baseUrl = "https://redmun.com";

  // Core Static Pages
  const staticRoutes = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/products", changeFrequency: "weekly", priority: 0.95 },
    { path: "/industries", changeFrequency: "monthly", priority: 0.85 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.85 },
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.85 },
    { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", changeFrequency: "daily", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/request-demo", changeFrequency: "monthly", priority: 0.85 },
    { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/legal/sla", changeFrequency: "yearly", priority: 0.4 },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Specialized Product Routes
  const productSlugs = [
    "1688-api",
    "shipping-management",
    "restaurant-management",
    "news-portal",
    "ecommerce",
    "branded-ecommerce",
    "company-profile",
  ];

  const productRoutes = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Blog Posts from WPGraphQL
  let postRoutes = [];
  try {
    const posts = await getAllPosts(100);
    if (Array.isArray(posts)) {
      postRoutes = posts
        .filter((post) => post && post.slug)
        .map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.date || Date.now()),
          changeFrequency: "weekly",
          priority: 0.75,
        }));
    }
  } catch (error) {
    console.error("Error generating blog post entries for sitemap:", error);
  }

  // Dynamic Blog Category Routes
  let categoryRoutes = [];
  try {
    const categories = await getCategories();
    if (Array.isArray(categories)) {
      categoryRoutes = categories
        .filter((cat) => cat && cat.slug)
        .map((cat) => ({
          url: `${baseUrl}/blog/category/${cat.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.65,
        }));
    }
  } catch (error) {
    console.error("Error generating category entries for sitemap:", error);
  }

  return [...staticRoutes, ...productRoutes, ...postRoutes, ...categoryRoutes];
}
