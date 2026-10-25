import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { ContactForm } from '../components/common/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vanguard Marketing Agency',
    description: 'Start a commercial inquiry or request a marketing consultation with our senior strategy team.',
  };

  return (
    <div id="page-contact" className="w-full">
      <SEOHead
        title="Contact Us — Vanguard Marketing Agency"
        description="Schedule a strategy consultation or request a growth audit. Let's discuss your commercial targets."
        schema={schema}
      />

      {/* Page Header */}
      <Section spacing="dense" className="pt-16 sm:pt-20 pb-8 text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Start the Conversation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Request an exploratory consultation.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Fill out the brief form below. A senior partner will review your goals and schedule a 30-minute introductory call.
          </p>
        </FadeIn>
      </Section>

      {/* Primary Focus: ONE Form, ONE clear submit action */}
      <Section spacing="dense" className="pt-0 pb-16">
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </Section>

      {/* Secondary Information: Kept small, quiet, and clearly subordinate */}
      <Section withTopBorder spacing="dense" className="bg-white/80">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-6">
            Direct Office Details
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>hello@vanguardagency.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>+1 (415) 890-2140</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>San Francisco • New York</span>
            </div>
          </div>
          <p className="text-xs text-neutral-400 mt-4">
            Average initial response time: under 4 business hours.
          </p>
        </FadeIn>
      </Section>
    </div>
  );
}
