import type { Metadata } from "next";
import { PricingPage } from "../../../site-pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing & Plans — Air Marketing Agency",
  description: "Explore marketing engagement options and pricing from Air Marketing Agency.",
};

export default function Page() {
  return <PricingPage />;
}
