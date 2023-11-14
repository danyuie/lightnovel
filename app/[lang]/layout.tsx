import type { Metadata } from 'next'
import './globals.css'
import { Locale, i18n } from '@/i18n.config'
import Navigation from '@/components/global/Navigation/Navigation'
// import Providers from '@/components/global/Providers'
import { Archivo } from 'next/font/google'
import Providers from '@/components/global/Providers'
import NavLinks from '@/components/global/Navigation/NavbarLinks'

const archivo = Archivo({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

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
    <html lang={params.lang} className={archivo.className}>
      <body>
        <Providers>
          <Navigation lang={params.lang} />
          <NavLinks lang={params.lang}/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
