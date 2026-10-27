import { aboutData } from '../data/about';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';

export function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Air Marketing Agency',
    description: 'Learn about our mission, principles, execution process, and senior leadership team.',
  };

  return (
    <div id="page-about" className="w-full">
      <SEOHead
        title="About Us — Air Marketing Agency"
        description="Learn about our mission, principles, execution process, and senior leadership team dedicated to compounding marketing returns."
        schema={schema}
      />

      {/* Hero / Mission */}
      <Section spacing="dense" className="pt-16 sm:pt-20 pb-12 text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6 text-balance">
            {aboutData.mission.headline}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            {aboutData.mission.statement}
          </p>
        </FadeIn>
      </Section>

      {/* Core Principles */}
      <Section withTopBorder spacing="dense" className="bg-white">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              Our Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Three commitments we never compromise on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.principles.map((p, idx) => (
              <div
                key={p.title}
                className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200/80 rounded-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-neutral-400">0{idx + 1}</span>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Essential Process */}
      <Section withTopBorder spacing="dense">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Our four-stage execution framework.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.process.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-white border border-neutral-200/90 rounded-xl flex flex-col space-y-3 shadow-xs"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Leadership Team */}
      <Section withTopBorder spacing="dense" className="bg-white">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Direct partnership with senior specialists.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Every client engagement is directly led and executed by senior practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.team.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-2.5"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-200 text-neutral-800 font-bold text-sm flex items-center justify-center mb-3">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-blue-600">
                  {member.role}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Single Final CTA */}
      <Section withTopBorder className="bg-neutral-50">
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Partner with our senior team.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            Tell us about your organization and let&apos;s explore how we can align our resources with your growth targets.
          </p>
          <Button
            href="/contact"
            id="about-cta-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Partner Discussion
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
