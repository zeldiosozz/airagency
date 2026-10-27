import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="main-footer" className="w-full bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              id="footer-logo"
              aria-label="Air Marketing Agency home"
              className="inline-flex items-center"
            >
              <Image
                src="/air-marketing-agency-logo.png"
                alt="Air Marketing Agency"
                width={415}
                height={180}
                className="h-12 w-auto object-contain"
                loading='eager'
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Full-service marketing agency dedicated to sustainable, capital-disciplined growth. 
              We combine technical rigor with exceptional creative execution.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-wider text-neutral-500 font-medium">
               New Cairo • El Nozha • Remote
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-neutral-200 font-semibold">
              Agency
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services"
                  id="footer-link-services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  id="footer-link-work"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  id="footer-link-about"
                  className="hover:text-white transition-colors"
                >
                  About & Team
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  id="footer-link-pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing & Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Next Step */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-neutral-200 font-semibold">
              Inquiries
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/contact"
                  id="footer-link-contact"
                  className="text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  Start an Engagement
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li className="text-neutral-400 text-sm">
                hello@airmarketingagency.com
              </li>
              <li className="text-neutral-400 text-sm">
                +20 (10) 99398877
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Air Marketing Agency Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" id="footer-privacy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" id="footer-terms" className="hover:text-neutral-400 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
