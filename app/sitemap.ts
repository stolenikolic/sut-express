import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sutexpress.rs',
      lastModified: new Date(),
    },
  ];
}