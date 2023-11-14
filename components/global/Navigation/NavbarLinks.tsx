import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import NavbarLinkList from './NavbarLink-list';

export default async function NavLinks({ lang }: { lang: Locale }) {
  const { navbar } = await getDictionary(lang)
 
  // console.log(navbar);
  return (
    <div className='border-b border-gray-100 text-neutral-900 dark:border-neutral-900'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <NavbarLinkList langNavLink={navbar}/>
      </div>
    </div>
  )
}
