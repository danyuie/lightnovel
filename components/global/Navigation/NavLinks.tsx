import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import React from 'react'
import LinkItem from './LinkItem';

export default async function NavLinks({ lang }: { lang: Locale }) {
  const { navbar } = await getDictionary(lang)
  console.log(navbar);
  return (
    <div className='border-b border-gray-100 text-neutral-900 dark:border-neutral-900'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
        <LinkItem>{navbar.home}</LinkItem>
        <LinkItem>{navbar.novel}</LinkItem>
        <LinkItem>{navbar.manhua}</LinkItem>
        <LinkItem>{navbar.manhwa}</LinkItem>
        <LinkItem>{navbar.manga}</LinkItem>
        <LinkItem>{navbar.category}</LinkItem>
        <LinkItem>{navbar.forum}</LinkItem>
      </div>
    </div>
  )
}
