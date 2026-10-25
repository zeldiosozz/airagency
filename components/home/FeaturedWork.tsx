import { caseStudiesData } from '../../data/caseStudies';
import { CaseStudyCard } from '../common/CaseStudyCard';
import { Section } from '../common/Section';
import { FadeIn } from '../common/FadeIn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedWork() {
  // Select top 2 case studies for homepage focus
  const featuredCases = caseStudiesData.slice(0, 2);

  return (
    <Section id="home-featured-work" withTopBorder>
      <FadeIn>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              Proven Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Measurable commercial results.
            </h2>
          </div>
          <Link
            href="/work"
            id="view-all-work-link"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-column featured layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} featured />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
