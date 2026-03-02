import Link from 'next/link'

export default function Header({ lang }: { lang: string }) {
  const isJa = lang === 'ja'
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <span className="font-bold text-indigo-700">{isJa ? 'AI副業ガイド' : 'AI Income Guide'}</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={`/${lang}`} className="text-sm text-gray-600 hover:text-indigo-600">{isJa ? 'ホーム' : 'Home'}</Link>
          <Link href={lang === 'ja' ? '/en' : '/ja'} className="text-xs bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full transition-colors">
            {isJa ? 'English' : '日本語'}
          </Link>
        </div>
      </div>
    </header>
  )
}
