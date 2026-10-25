"use client"

import { useState } from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { CaseStudyCard } from '../components/common/CaseStudyCard';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export function WorkPage() {
  // SINGLE FILTER DIMENSION: By service category only
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Search Engine Optimization',
    'Paid Advertising',
    'Branding & Identity',
    'Content Marketing',
  ];

  const filteredCaseStudies =
    selectedCategory === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.serviceCategory === selectedCategory);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies — Vanguard Marketing Agency',
    description: 'Detailed case studies and documented commercial results for high-growth companies.',
    hasPart: caseStudiesData.map((cs) => ({
      '@type': 'Article',
      headline: cs.title,
      description: cs.summary,
    })),
  };

  return (
    <div id="page-work" className="w-full">
      <SEOHead
        title="Case Studies & Work — Vanguard Marketing Agency"
        description="Explore detailed case studies showing how we lowered CAC, scaled organic inbound pipelines, and repositioned brands for long-term growth."
        schema={schema}
      />

      {/* Page Header */}
      <Section spacing="dense" className="pt-16 sm:pt-20 pb-8 text-center">
        <FadeIn className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Real problems, disciplined execution, measurable ROI.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Explore how we partner with category leaders to turn complex acquisition challenges into sustainable competitive advantages.
          </p>
        </FadeIn>
      </Section>

      {/* Single-dimension Filter Controls */}
      <Section spacing="dense" className="pt-0 pb-10">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-blue-600 ${
                    active
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100/80 hover:text-neutral-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-neutral-200">
              <p className="text-neutral-500 text-sm">
                No case studies found for this category.
              </p>
            </div>
          )}
        </FadeIn>
      </Section>

      {/* Single Final CTA */}
      <Section withTopBorder className="bg-white">
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Have a growth challenge of your own?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            We will conduct a preliminary audit of your current channels and provide actionable feedback on your biggest opportunities.
          </p>
          <Button
            href="/contact"
            id="work-cta-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Growth Diagnostic
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
