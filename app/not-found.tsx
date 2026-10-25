import { NotFoundPage } from "../site-pages/NotFoundPage";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <Header />
      <main id="main-content" className="flex-1 flex flex-col">
        <NotFoundPage />
      </main>
      <Footer />
    </div>
  );
}
