export default function Footer({ lang }: { lang: string }) {
  const isJa = lang === 'ja'
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p className="font-semibold text-gray-700 mb-2">🤖 {isJa ? 'AI副業ガイド' : 'AI Income Guide'}</p>
        <p className="mb-2">{isJa ? 'AIツールを活用して副業収入を得る方法を解説するサイトです。' : 'Your guide to making money with AI tools.'}</p>
        <p className="text-xs">{isJa ? '※当サイトにはアフィリエイトリンクが含まれています。' : '* This site contains affiliate links.'}</p>
        <p className="text-xs mt-1">© 2026 AI Income Guide</p>
      </div>
    </footer>
  )
}
