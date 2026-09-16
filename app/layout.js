import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://redmun.com"),
  title: {
    default: "Redmun Digitech | Enterprise Management & Automation Platforms",
    template: "%s | Redmun Digitech",
  },
  description:
    "Enterprise management platform built for growing businesses. Specialized digital architectures for 1688 API wholesale sourcing, international shipping manifests, restaurant POS chains, and headless e-commerce.",
  keywords: [
    "Redmun Digitech",
    "Redmin Digitech",
    "1688 API Sourcing",
    "Headless WordPress",
    "Next.js Enterprise Systems",
    "Shipping Management ERP",
    "Restaurant POS Management",
    "China Wholesale Automation",
    "Decoupled E-Commerce",
    "Software Architecture Bangladesh",
  ],
  authors: [{ name: "Redmun Digitech", url: "https://redmun.com" }],
  creator: "Redmun Digitech",
  publisher: "Redmun Digitech",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Redmun Digitech | Enterprise Management & Automation Platforms",
    description:
      "Enterprise management platforms and custom software architectures. Specialized solutions for 1688 API sourcing, cargo logistics, and high-concurrency digital platforms.",
    url: "https://redmun.com",
    siteName: "Redmun Digitech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Redmun-final.svg",
        width: 1200,
        height: 630,
        alt: "Redmun Digitech Enterprise Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redmun Digitech | Enterprise Management & Automation Platforms",
    description:
      "Enterprise management platforms, automated 1688 sourcing systems, and headless web architecture.",
    images: ["/Redmun-final.svg"],
  },
  icons: {
    icon: "/redmun0-icon.png",
    shortcut: "/redmun0-icon.png",
    apple: "/redmun0-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <meta name="darkreader-lock" content="true" />
        <meta name="color-scheme" content="light dark" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
