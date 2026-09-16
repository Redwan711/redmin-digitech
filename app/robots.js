/**
 * Next.js Robots.txt Generator
 * Manages search bot indexing rules, crawl directives, and sitemap reference.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/api/media*",
          "/_next/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/api/media*",
        ],
      },
    ],
    sitemap: "https://redmun.com/sitemap.xml",
    host: "https://redmun.com",
  };
}
