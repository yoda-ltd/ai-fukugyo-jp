import { Keyword, trendLabel, competitionLabel } from '@/lib/keywords'

export default function KeywordBadges({ kw, lang }: { kw: Keyword; lang: string }) {
  const isJa = lang === 'ja'
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full">
        {isJa ? `月${kw.searchVolume.toLocaleString()}検索` : `${kw.searchVolume.toLocaleString()}/month`}
      </span>
      <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
        CPC ${kw.cpc.toFixed(2)}
      </span>
      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${kw.competition === 'LOW' ? 'bg-blue-100 text-blue-700' : kw.competition === 'MED' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
        {competitionLabel(kw.competition, lang)}
      </span>
      <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
        {trendLabel(kw.trend, lang)}
      </span>
    </div>
  )
}
