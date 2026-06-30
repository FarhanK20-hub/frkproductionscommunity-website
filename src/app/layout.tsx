import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/layout/SmoothScroll'

// ── Fonts ─────────────────────────────────────────────────────────────────────
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'FRK Productions, Pan-India Creative Collective',
  description:
    "India's creative collective for filmmakers, actors, photographers, designers, writers, musicians and storytellers.",
  openGraph: {
    title: 'FRK Productions, Pan-India Creative Collective',
    description:
      "India's creative collective for filmmakers, actors, photographers, designers, writers, musicians and storytellers.",
    url: 'https://frkproductions.in',
    siteName: 'FRK Productions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FRK Productions, Pan-India Creative Collective',
    description:
      "India's creative collective for filmmakers, actors, photographers, designers, writers, musicians and storytellers.",
  },
  icons: {
    icon: '/logo.png',
  },
  verification: {
    google: 'ilk8NJanh644Bu-UYB5Vd3sbrEsdIfPmdTZhAieYah4',
  },
  metadataBase: new URL('https://frkproductions.in'),
}

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
