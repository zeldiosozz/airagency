import LazyDotLottie from "./LazyDotLottie";

import Link from 'next/link';
import { Service } from '../../types';
import {
  Search,
  TrendingUp,
  Share2,
  FileText,
  Globe,
  Mail,
  Compass,
  Layout,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Share2,
  FileText,
  Globe,
  Mail,
  Compass,
  Layout,
};
// const stepIcons = ["Animation SEO Traffic", "Search for value", "Money"];

interface ServiceCardProps {
  service: Service;
  index?: number;
}
function ProccessIconn({type= "Animation SEO Traffic"}:{type:string}){
  return <LazyDotLottie src={`/${type}.lottie`} />;
}
export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Search;

  return (
    <article
      id={`service-card-${service.slug}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-xl hover:border-neutral-300 hover:shadow-xs transition-all duration-200"
    >
<div className="relative">
        {/* Strictly monochrome icon - no distracting rainbow colors */}
  <div className="absolute top-0 left-0 z-10 w-11 h-11 rounded-lg bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-800">
          <IconComponent className="absolute w-5 h-5" strokeWidth={1.75} />
        </div>
  <div>
              <ProccessIconn type={service.lottieType} />

        </div>
        <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.shortSummary}
        </p>
      </div>

      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
          {service.resultsMetric.value} {service.resultsMetric.label.split(' ')[0]}
        </span>
        <Link
          href={`/services/${service.slug}`}
          id={`service-link-${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors"
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
