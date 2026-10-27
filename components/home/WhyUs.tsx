import { Section } from '../common/Section';
import { FadeIn } from '../common/FadeIn';
import { ShieldCheck, Target, BarChart3 } from 'lucide-react';

export function WhyUs() {
  const pillars = [
    {
      icon: Target,
      title: 'Strategy Grounded in Unit Economics',
      description: 'We do not recommend initiatives without modeling CAC payback and marginal contribution. Every program must justify itself on your balance sheet.',
    },
    {
      icon: ShieldCheck,
      title: 'Senior Practitioners Only',
      description: 'We do not employ pitch teams who hand accounts over to interns. Your strategy and execution are led by senior veterans with deep operational tenure.',
    },
    {
      icon: BarChart3,
      title: 'Compounding Channel Moats',
      description: 'While competitors rent temporary attention with short-lived ads alone, we build lasting organic search authority, editorial reputation, and brand recall.',
    },
  ];

  return (
    <Section id="home-why-us" withTopBorder>
      <FadeIn>
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
            Why Air Marketing Agency
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
            Built for founders who value capital discipline.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Most agencies operate as transactional task-takers. We operate as an aligned growth partner, prioritizing profit and sustainable market share over vanity metrics.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col space-y-3 p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Row */}
        {/* <div className="p-8 sm:p-10 bg-neutral-900 text-white rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          <div className="sm:pr-6">
            <StatCounter
              value="$48M+"
              label="Tracked Client Pipeline"
              context="Generated across organic and paid channels over 24 months."
            />
          </div>
          <div className="pt-6 sm:pt-0 sm:px-6">
            <StatCounter
              value="3.6x"
              label="Average Return on Ad Spend"
              context="Sustained across high-intent Google and Meta campaigns."
            />
          </div>
          <div className="pt-6 sm:pt-0 sm:pl-6">
            <StatCounter
              value="94%"
              label="Annual Client Retention"
              context="Demonstrated through multi-year strategic advisory relationships."
            />
          </div>
        </div> */}
      </FadeIn>
    </Section>
  );
}
