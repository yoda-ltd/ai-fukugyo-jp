import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Income Guide',
  description: 'Make money with AI tools',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
