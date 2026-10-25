"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../common/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
  const pathname = usePathname() ?? '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-black/35 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-black/30 backdrop-blur-xs border-b border-neutral-200/60'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          id="nav-logo"
          aria-label="Air Marketing Agency home"
          className="group flex items-center rounded-md py-1 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <Image
            src="/air-marketing-agency-logo.png"
            alt="Air Marketing Agency"
            width={415}
            height={180}
            className="h-14 w-auto rounded-sm sm:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation (Max 4 items) */}
        <nav
          id="desktop-nav"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? 'text-blue-600 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/70'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Single Primary Action */}
        <div className="hidden md:flex items-center">
          <Button
            href="/contact"
            id="nav-cta-contact"
            size="sm"
            variant="primary"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer (Single column of focus) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-blue-600 bg-blue-50/50 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Button
              href="/contact"
              id="mobile-nav-cta-contact"
              size="md"
              variant="primary"
              className="w-full"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
