"use client"
import React, { useState } from 'react'
type Props = {
  langNavLink: {
    home: string,
    novel: string,
    manhua: string,
    manhwa: string,
    manga: string,
    category: string,
    forum: string
  }
}
const NavbarLinkList = ({langNavLink}:Props) => {
  const [isSelect, setSelect] = useState('novel')
  return (
    <>
    <div onClick={()=> setSelect('home')} className={`p-5 font-medium text-base ${isSelect == 'home' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.home}</div>
    <div onClick={()=> setSelect('novel')} className={`p-5 font-medium text-base ${isSelect == 'novel' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.novel}</div>
    <div onClick={()=> setSelect('manhua')} className={`p-5 font-medium text-base ${isSelect == 'manhua' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.manhua}</div>
    <div onClick={()=> setSelect('manhwa')} className={`p-5 font-medium text-base ${isSelect == 'manhwa' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.manhwa}</div>
    <div onClick={()=> setSelect('manga')} className={`p-5 font-medium text-base ${isSelect == 'manga' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.manga}</div>
    <div onClick={()=> setSelect('category')} className={`p-5 font-medium text-base ${isSelect == 'category' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.category}</div>
    <div onClick={()=> setSelect('forum')} className={`p-5 font-medium text-base ${isSelect == 'forum' ? 'bg-green-600 text-neutral-50':'text-neutral-950 dark:text-neutral-50'}`}>{langNavLink.forum}</div>
    </>
  )
}

export default NavbarLinkList