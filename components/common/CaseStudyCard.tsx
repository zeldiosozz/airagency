import Link from 'next/link';
import { CaseStudy } from '../../types';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <article
      id={`case-study-${caseStudy.slug}`}
      className={`group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-xl hover:border-neutral-300 hover:shadow-xs transition-all duration-200 ${featured ? 'md:p-10' : ''}`}
    >
      <div>
        {/* Category & Industry Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
            {caseStudy.serviceCategory}
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            {caseStudy.industry}
          </span>
        </div>

        {/* Primary Metric Banner */}
        <div className="mb-4">
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            {caseStudy.heroMetric.value}
          </div>
          <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mt-0.5">
            {caseStudy.heroMetric.label}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
          {caseStudy.title}
        </h3>

        {/* Summary */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {caseStudy.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-xs text-neutral-500 font-medium">
          Client: {caseStudy.client}
        </span>
        <Link
          href={`/work/${caseStudy.slug}`}
          id={`case-study-link-${caseStudy.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors"
          aria-label={`Read case study on ${caseStudy.client}`}
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
