import { servicesData } from '../data/services';
import { ServiceCard } from '../components/common/ServiceCard';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servicesData.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: s.title,
      description: s.shortSummary,
    })),
  };

  return (
    <div id="page-services" className="w-full">
      <SEOHead
        title="Services — Full-Service Marketing Solutions"
        description="Explore our full-service marketing capabilities: SEO, paid acquisition, social media, content marketing, branding, email marketing, strategy, and web design."
        schema={schema}
      />

      {/* Page Header */}
      <Section spacing="dense" className="pt-16 sm:pt-20 pb-8 text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Core Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Disciplined execution across every growth lever.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            We operate as your unified full-service marketing team. Every service integrates seamlessly into your broader revenue architecture.
          </p>
        </FadeIn>
      </Section>

      {/* Services Grid (No filtering complexity — clean, direct layout) */}
      <Section spacing="dense" className="pt-0 pb-20">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Single Final CTA */}
      <Section withTopBorder className="bg-white">
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Unsure which channels to prioritize?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            During our exploratory call, we evaluate your current unit economics to recommend the highest-impact starting channels.
          </p>
          <Button
            href="/contact"
            id="services-cta-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Channel Evaluation
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
