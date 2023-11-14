'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'
import Icon from '@/components/global/svg/Icon';
import { useRef, useState } from 'react';

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const [open, setOpen] = useState(false)


  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  return (
    <div  onClick={()=>setOpen(!open)} className='relative'>
      <div  className='cursor-pointer text-sm text-gray-500 dark:text-neutral-300 tracking-tight flex items-center gap-[10px] select-none'>
        <div className='w-4 h-4 flex items-center justify-center'><Icon name='Globe'/></div>
        <div>{pathName.split('/')[1]==='vi'?'Ngôn Ngữ':'Language'}</div>
      </div>
      {open && <div className={`flex absolute top-12 w-fit left-1/2 -translate-x-1/2 rounded-lg border border-gray-200 p-3 grid-cols-2 gap-1 bg-white drop-shadow-dropdown dark:bg-neutral-900 dark:border-neutral-800`}>
      {i18n.locales.map(locale => {
        return (
          <div key={locale}>
            <Link
              onClick={()=>setOpen(!open)}
              href={redirectedPathName(locale)}
              className={`p-3 rounded w-[120px] flex flex-col gap-1 hover:bg-gray-100 dark:hover:bg-neutral-800 ${locale==='en' ?'English' :' Việt Nam'}`}
            >
              <div className='text-sm/4 tracking-tight text-neutral-900 dark:text-neutral-100'>{locale==='en' ?'English' :' Việt Nam'}</div>
              <div className='text-xs/3 tracking-tight text-gray-400'>{locale==='en' ?'United States' :' Vietnamese'}</div>
            </Link>
          </div>
        )
      })}
      </div>}
    </div>
    
  )
}