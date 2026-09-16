/**
 * Next.js Web App Manifest Generator
 * Improves PWA search signals, mobile display, and browser integration.
 */
export default function manifest() {
  return {
    name: "Redmun Digitech - Enterprise Management Platforms",
    short_name: "Redmun Digitech",
    description:
      "Enterprise management platform built for growing businesses. Specialized digital solutions for 1688 API sourcing, shipping, restaurants, and headless commerce.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d14",
    theme_color: "#e11d48",
    icons: [
      {
        src: "/redmun0-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/redmun0-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
