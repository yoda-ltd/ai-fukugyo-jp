import { Keyword } from './keywords'

interface ContentSection {
  heading: string
  body: string
}

function jaContent(kw: Keyword): ContentSection[] {
  const vol = kw.searchVolume.toLocaleString()
  const cpc = kw.cpc.toFixed(2)

  const base: ContentSection[] = [
    {
      heading: `${kw.keyword}とは？基礎から解説`,
      body: `「${kw.keyword}」は月${vol}人が検索するキーワードです。近年、生成AIの普及により、この分野での副業・収入機会が急速に拡大しています。広告主の入札単価（CPC）は$${cpc}と高く、市場の商業的価値の高さを示しています。`,
    },
    {
      heading: '具体的な始め方・ステップ',
      body: `${kw.keyword}を始めるには、まず①無料アカウントの作成、②基礎スキルの習得（1〜2週間）、③クラウドワークス・ランサーズへの登録、④低単価案件で実績作り、という4ステップが基本です。多くの人が最初の1ヶ月で¥10,000〜¥30,000の収入を得ています。`,
    },
    {
      heading: '単価相場と月収シミュレーション',
      body: `${kw.keyword}の案件単価は、初心者で¥500〜¥3,000/件、中級者で¥3,000〜¥15,000/件が目安です。週10時間稼働で月¥30,000〜¥60,000、週20時間で月¥60,000〜¥150,000を目指せます。`,
    },
    {
      heading: 'おすすめツール・プラットフォーム',
      body: `${kw.keyword}に必要なツールは、ChatGPT Plus（¥3,000/月）、Midjourney（$10/月〜）、またはRunway（$12/月〜）です。初期投資は月¥3,000〜¥5,000で始められます。クラウドワークス・ランサーズ・Upworkで案件を探しましょう。`,
    },
    {
      heading: 'よくある質問（FAQ）',
      body: `**Q: 未経験でも始められますか？** はい。多くのAI副業はAIツールが作業を補助するため、特別なスキルなしで始められます。\n\n**Q: 最初に何が必要ですか？** パソコンとインターネット環境、そしてクラウドワークスへの無料登録があれば十分です。\n\n**Q: 月いくら稼げますか？** 稼働時間と努力次第ですが、多くの初心者が3ヶ月以内に月¥30,000を達成しています。`,
    },
  ]

  return base
}

function enContent(kw: Keyword): ContentSection[] {
  const vol = kw.searchVolume.toLocaleString()
  const cpc = kw.cpc.toFixed(2)

  return [
    {
      heading: `What is "${kw.keyword}"? Complete Guide`,
      body: `"${kw.keyword}" gets ${vol} searches per month, with advertisers paying $${cpc} per click — showing strong commercial intent. AI tools have transformed this space, making it accessible to beginners while offering serious income potential for those who master them.`,
    },
    {
      heading: 'How to Get Started: Step-by-Step',
      body: `To start with ${kw.keyword}: 1) Create free accounts on Fiverr and Upwork (30 min), 2) Learn the core AI tools in your niche (1-2 weeks, mostly free), 3) Build a portfolio with 3-5 sample projects, 4) Apply to low-competition jobs to build reviews. Most beginners earn their first $100 within 2-4 weeks.`,
    },
    {
      heading: 'Realistic Earnings Breakdown',
      body: `Beginners can expect $10-$30/hour, intermediate practitioners $30-$75/hour, and specialists $75-$200+/hour. Working 10 hours/week, you could earn $400-$800/month starting out, scaling to $2,000-$5,000/month once you have reviews and a reputation.`,
    },
    {
      heading: 'Top Tools & Platforms',
      body: `For ${kw.keyword}, the essential tools are: ChatGPT Plus ($20/month), Midjourney ($10/month), and Runway ($12/month). Find clients on Fiverr, Upwork, and LinkedIn. Total startup cost: $30-$50/month — easily covered by your first gig.`,
    },
    {
      heading: 'Frequently Asked Questions',
      body: `**Q: Do I need prior experience?** No. AI tools handle most of the technical work. You need curiosity and willingness to learn.\n\n**Q: How fast can I make money?** Most people land their first paying client within 2-4 weeks of starting.\n\n**Q: Is this sustainable long-term?** Yes — AI skills are increasingly in demand across all industries.`,
    },
  ]
}

export function generateContent(kw: Keyword, lang: string): ContentSection[] {
  return lang === 'ja' ? jaContent(kw) : enContent(kw)
}
