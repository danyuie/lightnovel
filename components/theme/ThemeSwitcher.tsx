'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Icon from '@/components/global/svg/Icon'
import { Locale } from '@/i18n.config'
import { usePathname } from 'next/navigation'

const ThemeSwitcher = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname()

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handelClick = (value:string) => {
    setTheme(value)
    setOpen(!open)
  }

  return (
    <div onClick={() => setOpen(!open)} className='relative w-10 h-10  flex items-center justify-center rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800'>
      <button  className='w-6 h-6 text-gray-500'>
        <Icon name='Sun' className='w-6 h-6' />
      </button>
      {open && <div className='flex flex-col absolute top-12 w-fit left-1/2 -translate-x-1/2 rounded-lg border border-gray-200 p-3 gap-1 bg-white drop-shadow-dropdown dark:bg-neutral-900 dark:border-neutral-800 text-neutral-950 dark:text-neutral-100'>
          <div onClick={() => handelClick('light')} className='w-[148px] flex items-center gap-3 py-1 px-3 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 select-none cursor-pointer text-sm tracking-tight'>
            <Icon name='Sun' className='w-6 h-6' />
            <div>{lang=='en'?'Light':'Sáng'}</div>
          </div>
          <div onClick={() => handelClick('dark')} className='w-[148px] flex items-center gap-3 py-1 px-3 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 select-none cursor-pointer text-sm tracking-tight'>
            <Icon name='Moon' className='w-6 h-6' />
            <div>{lang=='en'?'Dark':'Tối'}</div>
          </div>
          <div onClick={() => handelClick('system')} className='w-[148px] flex items-center gap-3 py-1 px-3 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 select-none cursor-pointer text-sm tracking-tight'>
            <Icon name='Desktop' className='w-6 h-6' />
            <div>{lang=='en'?'System':'Hệ Thống'}</div>
          </div>
      </div>}
    </div>
  )
}

export default ThemeSwitcher