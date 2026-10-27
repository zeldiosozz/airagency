import { pricingPlans } from '../data/pricing';
import { Section } from '../components/common/Section';
import { FadeIn } from '../components/common/FadeIn';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { PricingCTAButton } from '../components/common/PricingCTAButton';
import { VantaSmoke } from '../components/common/VantaSmoke';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { VantaClouds } from '@/components/common/VantaClouds';

export function PricingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Air Marketing Agency Pricing',
    description: 'Transparent monthly marketing retainers with dedicated pods and closed-loop reporting.',
  };
const cardsColors = [
  {
      highlightColor : 0xffffff,
      midtoneColor : 0x000000,
      lowlightColor :  0x000000,
      baseColor : 0xffffff,
},
  {
      highlightColor : 0x96ff,
      midtoneColor : 0x87ff,
      lowlightColor :  0x96ff,
      baseColor : 0xffffff,
},
  {
      highlightColor : 0xffb400,
      midtoneColor : 0xfffe00,
      lowlightColor :  0xff3800,
      baseColor : 0xffffff,
}]
  return (
    
    <div id="page-pricing" className="w-full bg-[url(/partners/abstract-background-banner-modern-design/pricing%20background.jpg)]">
      
      <SEOHead
        title="Pricing & Packages — Air Marketing Agency"
        description="Clear, transparent retainer packages for high-growth businesses. Dedicated pods across SEO, paid ads, content, and strategy."
        schema={schema}
      />

      {/* Page Header */}
      
      <Section spacing="dense" className="pt-16 sm:pt-20 pb-10 text-center">
       
        <FadeIn className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
            Transparent Retainers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Predictable investment, aligned outcomes.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto">
            Clear monthly retainers with no hidden fees, multi-year lock-ins, or junior team handoffs. Scale up or adjust as your needs evolve.
          </p>
        </FadeIn>
      </Section>

      {/* 3 Clear Cards — NOT a dense 15-row comparison matrix */}
      <Section spacing="dense" className="pt-0 pb-16">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan, Index) => {
              const isRecommended = plan.recommended;
              const colors = cardsColors[Index]
              return (
                <div
                  key={plan.id}
                  id={`pricing-card-${plan.id}`}
                  className={`relative isolate flex flex-col justify-between p-8 rounded-2xl transition-all duration-200 bg-white ${
                    isRecommended
                      ? ' border-2 border-blue-600 shadow-md ring-4 ring-blue-50'
                      : ' border border-neutral-200/90 hover:border-neutral-300 shadow-xs'
                  }`}
                >
      <VantaSmoke className="absolute inset-0 z-0 overflow-hidden rounded-2xl"
      highlightColor = {colors.highlightColor}
      midtoneColor = {colors.midtoneColor}
      lowlightColor = {colors.lowlightColor}
      baseColor = {colors.baseColor}
      blurFactor={1}
      speed = {2.1}
                  />
                  <div className="relative z-10">
                    {/* Badge for Recommended plan */}
                    <div className="flex items-center justify-between h-7 mb-4">
                      {isRecommended ? (
                        <span className="text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                          Retainer Tier
                        </span>
                      )}
                    </div>

<div className='backdrop-blur-md bg-white/20 rounded-xl px-1'>
                      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">
                      {plan.name}
                    </h2>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 min-h-[40px]">
                      {plan.tagline}
                    </p>

</div>
                    {/* Price Display */}
                    <div className="mb-6 pb-6 border-b border-neutral-100 backdrop-blur-md bg-white/20 rounded-xl px-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold tracking-tight text-neutral-900">
                          {plan.price}
                        </span>
                        <span className="text-sm text-neutral-500 font-medium">
                          /{plan.cadence}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-2">
                        {plan.idealFor}
                      </p>
                    </div>

                    {/* Deliverables (5-6 focused rows max) */}
                    <div className="space-y-3.5 mb-8 backdrop-blur-md bg-white/20 rounded-xl p-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-neutral-900 block">
                        Included in this tier:
                      </span>
                      {plan.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA button for each card */}
                  <div className="relative z-10 pt-4 border-t border-neutral-100">
                    <PricingCTAButton
                      href="/contact"
                      id={`pricing-cta-${plan.id}`}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      {isRecommended ? 'Select Growth Plan' : `Inquire About ${plan.name}`}
                    </PricingCTAButton>
                  </div>
                </div>
              );
              })}
          </div>
        </FadeIn>
      </Section>

      {/* Frequently Asked Questions (essential, uncluttered) */}
      <Section withTopBorder spacing="dense" className="">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Clear terms, zero surprises.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-2">
              <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-500" />
                Are contracts fixed or flexible?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                All engagements begin with an initial 90-day sprint to establish tracking, produce foundational assets, and gather reliable data. After 90 days, retainers operate on a rolling month-to-month agreement with a 30-day notice period.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-2">
              <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-500" />
                Is ad spend included in the retainer?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                No. Ad spend is billed directly by the ad platforms (Google, Meta, etc.) to your company credit card. Our retainer covers strategy, creative production, campaign management, and attribution modeling.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-2">
              <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-neutral-500" />
                How quickly does an engagement begin?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Following contract signoff, your dedicated pod begins account audits and asset collection within 3 business days. First sprint deliverables go live within 10 to 14 days.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Final Single Action */}
      <Section withTopBorder className="">
      {/* <Section withTopBorder className="bg-neutral-50"> */}
        <FadeIn className="text-center max-w-xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
            Need a custom arrangement?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            If you have specialized compliance requirements or international multi-market targets, let&apos;s discuss a tailored scope.
          </p>
          <Button
            href="/contact"
            id="pricing-custom-cta"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Custom Scope
          </Button>
        </FadeIn>
      </Section>
    </div>
  );
}
