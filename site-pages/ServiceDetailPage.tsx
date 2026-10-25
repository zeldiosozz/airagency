import { servicesData } from '../data/services';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortSummary,
    provider: {
      '@type': 'Organization',
      name: 'Vanguard Marketing Agency',
    },
    serviceType: service.title,
  };

  return (
    <div id={`page-service-${service.slug}`} className="w-full">
      <SEOHead
        title={`${service.title} — Vanguard Marketing Agency`}
        description={service.shortSummary}
        schema={schema}
      />

      {/* Narrative Step 1: WHAT IT IS */}
      <Section spacing="dense" className="pt-12 sm:pt-16 pb-12">
        <FadeIn className="max-w-3xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              href="/services"
              id="back-to-services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>
          </div>

          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Service Deep Dive
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
            {service.tagline}
          </p>

          <div className="p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-2xl shadow-xs">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-3">
              Overview & Scope
            </h2>
            <p className="text-neutral-800 text-base leading-relaxed">
              {service.overview}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Deliverables List */}
      <Section withTopBorder spacing="dense" className="bg-white/60">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6">
            Core Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-white border border-neutral-200/80 rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-neutral-800 leading-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Narrative Step 2: HOW WE DO IT */}
      <Section withTopBorder spacing="default">
        <FadeIn className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
            Our Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8">
            How we execute {service.title}
          </h2>

          <div className="space-y-6">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-2xl flex flex-col sm:flex-row sm:items-start gap-5 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {m.step}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {m.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Narrative Step 3: RESULTS */}
      <Section withTopBorder spacing="default" className="bg-white">
        <FadeIn className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
            Performance Benchmark
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-8">
            Expected outcomes and results
          </h2>

          <div className="p-8 sm:p-10 bg-neutral-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-bold tracking-tight text-blue-400">
                {service.resultsMetric.value}
              </div>
              <div className="text-base font-semibold text-white">
                {service.resultsMetric.label}
              </div>
              <p className="text-xs text-neutral-400 max-w-sm">
                {service.resultsMetric.context}
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-300">
                Tracked over 9 months
              </span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Narrative Step 4: EXACTLY ONE CTA */}
      <Section withTopBorder spacing="dense" className="bg-neutral-50">
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Ready to accelerate your {service.title}?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            Schedule an introductory consultation to discuss your targets, audit current roadblocks, and review a tailored scope.
          </p>
          <Button
            href="/contact"
            id="service-detail-cta-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Strategy Consultation
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
