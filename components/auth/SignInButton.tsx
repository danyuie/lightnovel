'use client'
import { Button } from '@/components/ui/Button'
import { signIn } from 'next-auth/react'

type Props = {
  text: string
}

const SignInButton =  ({text}: Props) => {

  return (
    <Button onClick={(e)=> {
      e.preventDefault();
      signIn('google', {callbackUrl: 'https://localhost:3000'})
    }} className='text-neutral-50 dark:text-neutral-950'>{text}</Button>

  )
}

export default SignInButton