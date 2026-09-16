import TermsPage from "@/pages/TermsPage";

export const metadata = {
  title: "Terms of Service & Licensing Rights",
  description:
    "Review software licensing rights, API rate fair-use limits, payment terms, and SLA agreements with Redmun Digitech.",
  alternates: {
    canonical: "https://redmun.com/legal/terms",
  },
  openGraph: {
    title: "Terms of Service | Redmun Digitech",
    description: "Review software licensing rights, API fair-use rules, and contract terms.",
    url: "https://redmun.com/legal/terms",
  },
};

export default function Page() {
  return <TermsPage />;
}
