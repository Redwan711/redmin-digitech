import SLAPage from "@/pages/SLAPage";

export const metadata = {
  title: "Service Level Agreement (SLA) & Uptime Commitments",
  description:
    "Review our 99.9% platform uptime guarantee, P1-P4 incident response SLAs, compensation credits, and disaster recovery commitments.",
  alternates: {
    canonical: "https://redmun.com/legal/sla",
  },
  openGraph: {
    title: "SLA Agreement | Redmun Digitech",
    description: "Our 99.9% uptime guarantee, incident response tiers, and disaster recovery SLA.",
    url: "https://redmun.com/legal/sla",
  },
};

export default function Page() {
  return <SLAPage />;
}
