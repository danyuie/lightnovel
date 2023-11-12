import type { Metadata } from 'next'
import './globals.css'
import { Locale, i18n } from '@/i18n.config'
import Navigation from './components/global/Navigation'
import Providers from './components/theme/Providers'


export const metadata: Metadata = {
  title: 'Light Nover Webtoon',
  description: 'Light Nover Webtoon',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {lang: Locale}
}) {
  return (
    <html lang={params.lang}>
      <body >
        <Providers>
          <Navigation lang={params.lang} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
