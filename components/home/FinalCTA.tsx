import { Section } from '../common/Section';
import { FadeIn } from '../common/FadeIn';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <Section id="final-cta-section" withTopBorder className="bg-white">
      <FadeIn className="text-center max-w-2xl mx-auto py-8 sm:py-12">
        <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 block mb-3">
          Next Step
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-6 text-balance">
          Ready to turn marketing into a predictable revenue engine?
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10 text-balance font-normal">
          We will review your current channels, identify untapped leverage points, and propose a concrete 90-day execution plan.
        </p>
        <div className="flex flex-col items-center">
          <Button
            href="/contact"
            id="final-cta-primary-button"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule Strategy Consultation
          </Button>
          <span className="text-xs text-neutral-500 mt-4">
            30-minute introductory assessment • Zero sales pressure
          </span>
        </div>
      </FadeIn>
    </Section>
  );
}
