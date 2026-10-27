import type { Metadata } from "next";
import { WorkPage } from "../../../site-pages/WorkPage";

export const metadata: Metadata = {
  title: "Case Studies & Work — Air Marketing Agency",
  description:
    "Explore detailed case studies showing how we lowered CAC, scaled organic inbound pipelines, and repositioned brands for long-term growth.",
};

export default function Page() {
  return <WorkPage />;
}
