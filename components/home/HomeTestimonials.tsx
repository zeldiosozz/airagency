import { Section } from '../common/Section';
import { FadeIn } from '../common/FadeIn';
import { TestimonialBlock } from '../common/TestimonialBlock';

export function HomeTestimonials() {
  return (
    <Section id="home-testimonials" withTopBorder>
      <FadeIn>
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-2">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Validated by commercial partners.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <TestimonialBlock />
        </div>
      </FadeIn>
    </Section>
  );
}
