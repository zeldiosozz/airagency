import { caseStudiesData } from '../data/caseStudies';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface CaseStudyDetailPageProps {
  slug: string;
}

export function CaseStudyDetailPage({ slug }: CaseStudyDetailPageProps) {
  const caseStudy = caseStudiesData.find((c) => c.slug === slug) || caseStudiesData[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.summary,
    author: {
      '@type': 'Organization',
      name: 'Vanguard Marketing Agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vanguard Marketing Agency',
    },
    about: {
      '@type': 'Thing',
      name: caseStudy.client,
    },
  };

  return (
    <div id={`page-case-study-${caseStudy.slug}`} className="w-full">
      <SEOHead
        title={`${caseStudy.title} — Vanguard Case Study`}
        description={caseStudy.summary}
        schema={schema}
      />

      {/* Hero / Overview Header */}
      <Section spacing="dense" className="pt-12 sm:pt-16 pb-12">
        <FadeIn className="max-w-3xl mx-auto">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/work"
              id="back-to-work"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all case studies</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
              {caseStudy.serviceCategory}
            </span>
            <span className="text-xs text-neutral-500 font-medium">
              Client: {caseStudy.client} • {caseStudy.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
            {caseStudy.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-10">
            {caseStudy.summary}
          </p>

          {/* Metrics Grid Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-neutral-900 text-white rounded-2xl">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-400">
                  {m.value}
                </div>
                <div className="text-xs text-neutral-300 font-medium leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Strict Narrative Step 1: PROBLEM */}
      <Section withTopBorder spacing="dense" className="bg-white">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
              The Challenge & Problem
            </h2>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4">
            Root causes of stalled growth
          </h3>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-prose">
            {caseStudy.problem}
          </p>
        </FadeIn>
      </Section>

      {/* Strict Narrative Step 2: APPROACH */}
      <Section withTopBorder spacing="dense">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
              Our Strategic Approach
            </h2>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4">
            Disciplined execution sprints
          </h3>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-prose">
            {caseStudy.approach}
          </p>
        </FadeIn>
      </Section>

      {/* Strict Narrative Step 3: RESULTS */}
      <Section withTopBorder spacing="dense" className="bg-white">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold flex items-center justify-center">
              3
            </span>
            <h2 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
              Measurable Outcomes
            </h2>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-4">
            Long-term compounding return
          </h3>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-prose mb-8">
            {caseStudy.results}
          </p>

          {/* Client Testimonial if present */}
          {caseStudy.testimonial && (
            <div className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200/90 rounded-xl">
              <Quote className="w-6 h-6 text-neutral-400 mb-3" />
              <blockquote className="text-neutral-900 font-medium text-base sm:text-lg leading-relaxed mb-4">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-xs text-neutral-600 font-semibold">
                {caseStudy.testimonial.author} — <span className="font-normal text-neutral-500">{caseStudy.testimonial.role}</span>
              </div>
            </div>
          )}
        </FadeIn>
      </Section>

      {/* Narrative Final Step: EXACTLY ONE CTA */}
      <Section withTopBorder spacing="dense" className="bg-neutral-50">
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Achieve similar results for your business.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            Let&apos;s examine your current acquisition data and identify where high-leverage growth gains are waiting to be captured.
          </p>
          <Button
            href="/contact"
            id="case-study-cta-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start an Exploratory Conversation
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
