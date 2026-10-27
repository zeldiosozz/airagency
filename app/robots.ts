import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  let sitemap: string | undefined;

  if (siteUrl) {
    try {
      sitemap = new URL('/sitemap.xml', siteUrl).toString();
    } catch {
      sitemap = undefined;
    }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    ...(sitemap ? { sitemap } : {}),
  };
}
