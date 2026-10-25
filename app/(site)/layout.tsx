import type { ReactNode } from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
