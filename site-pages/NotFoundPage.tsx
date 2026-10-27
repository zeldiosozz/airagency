import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div id="page-not-found" className="w-full">
      <SEOHead
        title="Page Not Found — Air Marketing Agency"
        description="The requested page could not be located."
      />
      <Section className="py-28 sm:py-36 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
            404 Error
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Page not found
          </h1>
          <p className="text-neutral-600 text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved. Return to the homepage to navigate our agency services and case studies.
          </p>
          <div className="pt-2">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
