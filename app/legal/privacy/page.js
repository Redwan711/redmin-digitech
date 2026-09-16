import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy & Data Sovereignty",
  description:
    "Read how Redmun Digitech protects client data, ensures database sovereignty, and handles API payload encryption.",
  alternates: {
    canonical: "https://redmun.com/legal/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Redmun Digitech",
    description: "Data privacy, security standards, and database sovereignty policies at Redmun Digitech.",
    url: "https://redmun.com/legal/privacy",
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
