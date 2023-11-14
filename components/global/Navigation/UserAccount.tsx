'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Icon from '@/components/global/svg/Icon'
import { signOut } from 'next-auth/react'

type Props = {
  name:string,
  email:string,
  image:string,
  context: {
    profile: string,
    donate: string,
    favorites: string,
    logout: string,
  }
}

const UserAccount = ({name, email, image, context}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div onClick={()=>setOpen(!open)} className='relative cursor-pointer'>
      <div className='overflow-hidden rounded-full border border-gray-200 dark:border-neutral-800'>
        <Image src={image} alt='' height={40} width={40} ></Image>
      </div>
      {open && (
        <div className='flex flex-col absolute top-14 w-fit right-0 rounded-lg border border-gray-200 bg-white drop-shadow-dropdown dark:bg-neutral-900 dark:border-neutral-800 text-neutral-950 dark:text-neutral-100 overflow-hidden'>
          <div className='px-5 py-4 border-b border-gray-200 dark:border-neutral-800 flex flex-col gap-1'>
            <div className='text-base/4 font-medium'>{name}</div>
            <div className='text-sm/3 text-gray-400'>{email}</div>
          </div>
          <div className='px-[10px] py-2 flex flex-col gap-2'>
            <div className='flex items-center gap-2 px-[10px] py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-neutral-800'>
              <Icon name='Profile' className='w-4 h-4' />
              <div>{context.profile}</div>
            </div>
            <div className='flex items-center gap-2 px-[10px] py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-neutral-800'>
              <Icon name='Donate' className='w-4 h-4' />
              <div>{context.donate}</div>
            </div>
            <div className='flex items-center gap-2 px-[10px] py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-neutral-800'>
              <Icon name='Favorites' className='w-4 h-4' />
              <div>{context.favorites}</div>
            </div>
            
          </div>
          <div onClick={(e)=>{
            e.preventDefault();
            signOut()
          }} className='px-5 py-4 border-t border-gray-200 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-800'>
              <div className='flex items-center gap-2 text-sm '>
                <Icon name='Logout' className='w-4 h-4' />
                <div>{context.logout}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAccount