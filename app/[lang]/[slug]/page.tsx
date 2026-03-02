import { getKeywords, getKeyword, getRelated } from '@/lib/keywords'
import { generateContent } from '@/lib/content'
import KeywordBadges from '@/components/KeywordBadges'
import AffiliateCTA from '@/components/AffiliateCTA'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = Promise<{ lang: string; slug: string }>

export async function generateStaticParams() {
  const langs = ['ja', 'en']
  return langs.flatMap(lang =>
    getKeywords(lang).map(kw => ({ lang, slug: kw.slug }))
  )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params
  const kw = getKeyword(lang, slug)
  if (!kw) return {}
  return { title: kw.title, description: kw.description }
}

export default async function KeywordPage({ params }: { params: Params }) {
  const { lang, slug } = await params
  const kw = getKeyword(lang, slug)
  if (!kw) notFound()

  const isJa = lang === 'ja'
  const content = generateContent(kw, lang)
  const related = getRelated(lang, kw)

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href={`/${lang}`} className="hover:text-indigo-600">{isJa ? 'ホーム' : 'Home'}</Link>
        <span className="mx-2">›</span>
        <span>{kw.keyword}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-3 leading-tight">{kw.title}</h1>
      <p className="text-gray-600 mb-4 text-lg">{kw.description}</p>
      <KeywordBadges kw={kw} lang={lang} />

      <AffiliateCTA text={kw.affiliateText} href={kw.affiliateUrl}
        sub={isJa ? '※無料登録・アフィリエイトリンクあり' : '* Affiliate link — we may earn a commission'} />

      {content.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">{section.heading}</h2>
          <div className="text-gray-700 leading-relaxed space-y-3">
            {section.body.split('\n\n').map((para, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>
        </section>
      ))}

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-8">
        <h3 className="font-bold text-indigo-800 mb-3">{isJa ? '📊 このキーワードのデータ' : '📊 Keyword Data'}</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {([
            [isJa ? '月間検索数' : 'Monthly Searches', kw.searchVolume.toLocaleString()],
            [isJa ? '広告CPC' : 'Avg. CPC', `$${kw.cpc.toFixed(2)}`],
            [isJa ? '競合レベル' : 'Competition', kw.competition],
            [isJa ? '検索トレンド' : 'Trend', kw.trend === 'up' ? '📈 上昇中' : kw.trend === 'down' ? '📉 下降中' : '➡️ 安定'],
          ] as [string, string][]).map(([label, val]) => (
            <div key={label}>
              <span className="text-indigo-600 font-semibold">{label}：</span>
              <span className="text-gray-700">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <AffiliateCTA text={kw.affiliateText} href={kw.affiliateUrl} />

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">{isJa ? '関連キーワード' : 'Related Topics'}</h2>
          <div className="grid grid-cols-1 gap-3">
            {related.map(r => (
              <Link key={r.slug} href={`/${lang}/${r.slug}`}
                className="flex justify-between items-center bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-indigo-400 transition-colors">
                <span className="font-medium text-gray-800">{r.keyword}</span>
                <span className="text-sm text-indigo-600">
                  {isJa ? `月${r.searchVolume.toLocaleString()}検索` : `${r.searchVolume.toLocaleString()}/mo`} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
