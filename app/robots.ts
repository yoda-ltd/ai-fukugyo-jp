export const dynamic = "force-static"

import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ai-fukugyo.com/sitemap.xml',
  }
}
