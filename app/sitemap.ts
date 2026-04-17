import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sutexpress.rs',
      lastModified: new Date(),
    },
    {
      url: 'https://sutexpress.rs/odvoz-suta-novi-sad',
      lastModified: new Date(),
    },
    {
      url: 'https://sutexpress.rs/prevoz-gradjevinskog-materijala-novi-sad',
      lastModified: new Date(),
    },
  ];
}