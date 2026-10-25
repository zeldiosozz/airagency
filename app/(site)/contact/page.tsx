import type { Metadata } from "next";
import { ContactPage } from "../../../site-pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Vanguard Marketing Agency",
  description:
    "Get in touch with Vanguard Marketing Agency to discuss your growth goals and request a strategy consultation.",
};

export default function Page() {
  return <ContactPage />;
}
