/**
 * Next.js Web App Manifest Generator
 * Improves PWA search signals, mobile display, and browser integration.
 */
export default function manifest() {
  return {
    name: "Redmun Digitech - Enterprise Business Platforms Development Company",
    short_name: "Redmun Digitech",
    description:
      "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
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
