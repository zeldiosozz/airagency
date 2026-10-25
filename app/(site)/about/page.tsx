import type { Metadata } from "next";
import { AboutPage } from "../../../site-pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us — Vanguard Marketing Agency",
  description:
    "Learn about our mission, principles, execution process, and senior leadership team dedicated to compounding marketing returns.",
};

export default function Page() {
  return <AboutPage />;
}
