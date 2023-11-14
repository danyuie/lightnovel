"use client"
// import { Locale } from '@/i18n.config'
// import { getDictionary } from '@/lib/dictionary'

// export default async function Home({params: { lang }}: {params: { lang: Locale }}) {
  
//   const { navigation } = await getDictionary(lang)

//   return (
//     <section className='py-24 max-w-[1200px] mx-auto'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>{navigation.adult}</h1>
//         <p className='text-gray-500'>{navigation.searchPlaceholder}</p>
//         <button></button>
//       </div>
//     </section>
//   )
// }

import React from 'react'

import { signIn } from 'next-auth/react';

const page = () => {
  return (
    <div>cc</div>
  )
}

export default page
