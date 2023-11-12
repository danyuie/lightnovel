import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'

export default async function Navigation({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>{navigation.adult}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.webtoon}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.searchPlaceholder}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.login}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}