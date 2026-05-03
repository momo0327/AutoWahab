import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/om-oss', '/kontakt'],
      disallow: ['/cookiepolicy', '/latest-models', '/booking-auto', '/mercedes-benz', '/video'],
    },
    sitemap: 'https://autowahab.se/sitemap.xml',
  };
}
