import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeSwitcher from '../../theme/ThemeSwitcher'
import Search from '../../ui/Search'
import { Button } from '../../ui/Button'

export default async function Navigation({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-3 border-b border-gray-100 text-neutral-900 dark:border-neutral-900'>
      <nav className='container flex items-center justify-between max-w-[1200px] mx-auto'>
        <div className='flex items-center gap-4'>
          <div className="font-black tracking-tighter text-base uppercase dark:text-neutral-50">{navigation.brand}</div>
          <div className='w-[1px] h-[13px] bg-gray-200 dark:bg-neutral-700'></div>
          <div className='text-base font-semibold tracking-tighter text-gray-300 capitalize dark:text-neutral-700'>{navigation.adult}</div>
          <div className='w-[1px] h-[13px] bg-gray-200 dark:bg-neutral-700'></div>
          <div className='text-base font-semibold tracking-tighter text-gray-300 capitalize dark:text-neutral-700'>{navigation.webtoon}</div>
        </div>
        <div className='flex items-center gap-6'>
          <Search placeholder={navigation.searchPlaceholder} />
          <LocaleSwitcher />
          <ThemeSwitcher lang={lang}/>
          <Button className='text-neutral-50 dark:text-neutral-950'>{navigation.login}</Button>
        </div>
      </nav>
    </header>
  )
}