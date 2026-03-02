import { MetadataRoute } from 'next'
import { getKeywords } from '@/lib/keywords'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ai-fukugyo.com'
  const langs = ['ja', 'en']
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/ja`, lastModified: new Date(), priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), priority: 0.9 },
  ]
  for (const lang of langs) {
    for (const kw of getKeywords(lang)) {
      entries.push({ url: `${base}/${lang}/${kw.slug}`, lastModified: new Date(), priority: 0.7 })
    }
  }
  return entries
}
