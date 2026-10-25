import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { ClientLogos } from '../components/home/ClientLogos';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyUs } from '../components/home/WhyUs';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { HomeTestimonials } from '../components/home/HomeTestimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vanguard Marketing Agency',
    description: 'Full-service marketing agency providing SEO, paid advertising, content marketing, branding, and strategic consulting.',
    url: 'https://vanguardagency.com',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    serviceType: [
      'Search Engine Optimization',
      'Paid Acquisition',
      'Social Media Management',
      'Content Marketing',
      'Branding & Identity',
      'Email Marketing',
      'Marketing Strategy',
      'Web Design & Development',
    ],
  };

  return (
    <div id="page-home" className="flex flex-col w-full">
      <SEOHead
        title="Vanguard Marketing Agency — Full-Service Growth & Brand Strategy"
        description="Full-service marketing agency delivering measurable growth across SEO, paid acquisition, branding, content, and marketing strategy."
        schema={schema}
      />
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <WhyUs />
      <FeaturedWork />
      <HomeTestimonials />
      <FinalCTA />
    </div>
  );
}
