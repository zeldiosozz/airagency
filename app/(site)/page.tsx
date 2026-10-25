import type { Metadata } from "next";
import { HomePage } from "../../site-pages/HomePage";

export const metadata: Metadata = {
  title: "Vanguard Marketing Agency — Full-Service Growth & Brand Strategy",
  description:
    "Full-service marketing agency delivering measurable growth across SEO, paid acquisition, branding, content, and marketing strategy.",
};

export default function Page() {
  return <HomePage />;
}
