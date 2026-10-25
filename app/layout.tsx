import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vanguard Marketing Agency — Full-Service Growth & Brand Strategy",
    template: "%s | Vanguard Marketing Agency",
  },
  description:
    "Full-service marketing agency delivering measurable growth across SEO, paid acquisition, branding, content, and marketing strategy.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="min-h-full flex flex-col">{children}</body></html>;
}
