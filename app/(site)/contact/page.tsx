import type { Metadata } from "next";
import { ContactPage } from "../../../site-pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Air Marketing Agency",
  description:
    "Get in touch with Air Marketing Agency to discuss your growth goals and request a strategy consultation.",
};

export default function Page() {
  return <ContactPage />;
}
