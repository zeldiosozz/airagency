import type { Metadata } from "next";
import { ServicesPage } from "../../../site-pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Full-Service Marketing Solutions",
  description:
    "Explore our full-service marketing capabilities: SEO, paid acquisition, social media, content marketing, branding, email marketing, strategy, and web design.",
};

export default function Page() {
  return <ServicesPage />;
}
