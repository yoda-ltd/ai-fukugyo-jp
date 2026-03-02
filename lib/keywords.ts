import jaKeywords from '@/data/keywords-ja.json'
import enKeywords from '@/data/keywords-en.json'

export interface Keyword {
  slug: string
  keyword: string
  searchVolume: number
  cpc: number
  competition: 'LOW' | 'MED' | 'HIGH'
  trend: 'up' | 'down' | 'stable'
  category: string
  title: string
  description: string
  affiliateUrl: string
  affiliateText: string
}

export function getKeywords(lang: string): Keyword[] {
  return lang === 'ja' ? (jaKeywords as Keyword[]) : (enKeywords as Keyword[])
}

export function getKeyword(lang: string, slug: string): Keyword | undefined {
  return getKeywords(lang).find(k => k.slug === slug)
}

export function getRelated(lang: string, current: Keyword, limit = 5): Keyword[] {
  return getKeywords(lang)
    .filter(k => k.slug !== current.slug && (k.category === current.category || k.searchVolume > 500))
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit)
}

export function trendLabel(trend: string, lang: string) {
  if (lang === 'ja') return trend === 'up' ? '📈 上昇中' : trend === 'down' ? '📉 下降中' : '➡️ 安定'
  return trend === 'up' ? '📈 Rising' : trend === 'down' ? '📉 Declining' : '➡️ Stable'
}

export function competitionLabel(c: string, lang: string) {
  if (lang === 'ja') return c === 'LOW' ? '低競合' : c === 'MED' ? '中競合' : '高競合'
  return c === 'LOW' ? 'Low Competition' : c === 'MED' ? 'Medium' : 'High Competition'
}
