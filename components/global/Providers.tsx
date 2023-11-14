'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider } from "next-themes"

type Props = {
  children: React.ReactNode

}

const Providers = ({children}: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <SessionProvider >{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers