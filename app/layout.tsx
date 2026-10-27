import type { Metadata } from "next";
import type { ReactNode } from "react";
import { WhatsAppBubble } from "../components/layout/WhatsAppBubble";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Air Marketing Agency — Full-Service Growth & Brand Strategy",
    template: "%s | Air Marketing Agency",
  },
  description:
    "Full-service marketing agency delivering measurable growth across SEO, paid acquisition, branding, content, and marketing strategy.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
