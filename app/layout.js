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
    default: "Redmun Digitech | Enterprise Business Platforms Development Company",
    template: "%s | Redmun Digitech",
  },
  description:
    "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
  keywords: [
    "Redmun Digitech",
    "Redmin Digitech",
    "Enterprise Business Platforms",
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
    title: "Redmun Digitech | Enterprise Business Platforms Development Company",
    description:
      "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
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
    title: "Redmun Digitech | Enterprise Business Platforms Development Company",
    description:
      "Redmun Digitech is a Dhaka-based enterprise business platform development company specializing in 1688 API sourcing platforms, e-commerce, shipping management, restaurant software, and custom web solutions.",
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
