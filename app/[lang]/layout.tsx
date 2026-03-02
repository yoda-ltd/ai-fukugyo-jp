import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <html lang={lang}>
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header lang={lang} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}
