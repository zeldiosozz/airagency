import type { MetadataRoute } from 'next';
import { caseStudiesData } from '../data/caseStudies';
import { servicesData } from '../data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configuredUrl) return [];

  let origin: string;
  try {
    origin = new URL(configuredUrl).origin;
  } catch {
    return [];
  }

  const staticPaths = ['', '/about', '/contact', '/pricing', '/services', '/work'];
  const servicePaths = servicesData.map((service) => `/services/${service.slug}`);
  const caseStudyPaths = caseStudiesData.map((caseStudy) => `/work/${caseStudy.slug}`);

  return [...staticPaths, ...servicePaths, ...caseStudyPaths].map((path) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.split('/').filter(Boolean).length === 1 ? 0.8 : 0.6,
  }));
}
