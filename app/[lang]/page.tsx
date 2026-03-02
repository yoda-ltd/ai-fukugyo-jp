import { getKeywords } from '@/lib/keywords'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isJa = lang === 'ja'
  return {
    title: isJa ? 'AI副業ガイド 2026｜月5万円稼ぐAI副業の始め方' : 'AI Income Guide 2026 | Best AI Side Hustles',
    description: isJa
      ? 'AIを活用した副業で月5万円以上稼ぐ方法を解説。クラウドワークス・動画生成AI・AIライティングなど2026年最新情報。'
      : 'Discover the best ways to make money with AI in 2026. From ChatGPT side hustles to AI video generation — real income, real results.',
  }
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isJa = lang === 'ja'
  const keywords = getKeywords(lang)
  const sorted = [...keywords].sort((a, b) => b.searchVolume - a.searchVolume)

  const stats = isJa
    ? [['月12,100人', '「AI副業」を検索'], [`${keywords.length}キーワード`, '網羅済み'], ['初期費用', '¥0〜¥3,000']]
    : [['12,100/mo', 'search "ai side hustle"'], [`${keywords.length} keywords`, 'tracked'], ['Start for', '$0–$50']]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-14">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          {isJa ? '2026年最新版' : '2026 Edition'}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {isJa ? 'AIを使った副業の始め方【月5万円稼ぐ方法】' : 'Make Money with AI in 2026 — The Complete Guide'}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {isJa
            ? 'ChatGPT・Midjourney・RunwayなどのAIツールを活用して、スキルなしでも副収入を得る方法を解説します。'
            : 'Use ChatGPT, Midjourney, Runway and more to build real income online. No experience required.'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-12 text-center">
        {stats.map(([val, label]) => (
          <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="text-xl font-bold text-indigo-600">{val}</div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-5">
        {isJa ? '📊 人気キーワード（検索数順）' : '📊 Top Keywords by Search Volume'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {sorted.map(kw => (
          <Link key={kw.slug} href={`/${lang}/${kw.slug}`}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-400 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 group-hover:text-indigo-600">{kw.keyword}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${kw.trend === 'up' ? 'bg-green-100 text-green-700' : kw.trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                {kw.trend === 'up' ? '📈' : kw.trend === 'down' ? '📉' : '➡️'}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{kw.description}</p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">
                {isJa ? `月${kw.searchVolume.toLocaleString()}検索` : `${kw.searchVolume.toLocaleString()}/mo`}
              </span>
              <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">CPC ${kw.cpc.toFixed(2)}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${kw.competition === 'LOW' ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'}`}>
                {kw.competition}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">{isJa ? '🚀 今すぐ始める' : '🚀 Start Today'}</h2>
        <p className="mb-6 opacity-90">{isJa ? '無料登録から始めて、最初の案件を受注しましょう。' : 'Sign up free and land your first AI gig.'}</p>
        <a href="https://crowdworks.jp" target="_blank" rel="noopener noreferrer sponsored"
          className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors">
          {isJa ? 'クラウドワークスで始める →' : 'Start on Fiverr →'}
        </a>
      </div>
    </div>
  )
}
