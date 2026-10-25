import { Button } from '../common/Button';
import { FadeIn } from '../common/FadeIn';
import { ArrowRight } from 'lucide-react';
import { VantaClouds } from '../common/VantaClouds';

export function Hero() {
  return (
    <section id="home-hero" className="relative isolate w-full overflow-hidden py-20 text-center sm:py-28">
      <VantaClouds className="pointer-events-none absolute inset-0 z-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-white/45" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Subtle quiet context badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-medium text-neutral-700 mb-8">
            <span>Full-Service Growth & Brand Agency</span>
          </div>

          {/* EXACTLY ONE H1 focal headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12] mb-6 text-balance">
            Marketing that compounds into predictable pipeline.
          </h1>

          {/* Subordinate supporting body text */}
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-10 text-balance font-normal">
            We partner with ambitious leadership teams to build disciplined acquisition systems across SEO, paid media, content, and brand strategy.
          </p>

          {/* EXACTLY ONE primary CTA button — no competing secondary button to distract the visitor */}
          <div className="pt-2">
            <Button
              href="/contact"
              id="hero-primary-cta"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start an Engagement
            </Button>
          </div>

          {/* Trust reassurance note */}
          <p className="text-xs text-neutral-500 mt-4">
            Direct access to senior strategists • No junior handoffs
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
