import { servicesData } from '../../data/services';
import { ServiceCard } from '../common/ServiceCard';
import { Section } from '../common/Section';
import { FadeIn } from '../common/FadeIn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesOverview() {
  // Show core 6 services on homepage; link to /services for full catalog
  const featuredServices = servicesData.slice(0, 6);

  return (
    <Section id="home-services-overview" withTopBorder>
      <FadeIn>
        {/* Section Header: ONE focal H2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Full-service execution, single-team accountability.
            </h2>
          </div>
          <Link
            href="/services"
            id="view-all-services-link"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>View all 8 services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-column grid on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
