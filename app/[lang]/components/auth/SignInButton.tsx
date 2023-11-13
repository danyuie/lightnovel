'use client'
import { Button } from '../ui/Button'
import { signIn } from 'next-auth/react'

type Props = {
  text: string
}

const SignInButton =  ({text}: Props) => {
  // const loginWithGoogle = () => {
  //   signIn('google', {callbackUrl: 'https://localhost:3000'})
  // }
  return (
    // <Button onClick={(e)=> {
    //   e.preventDefault();
    //   signIn('google', {callbackUrl: 'https://localhost:3000'})
    // }} className='text-neutral-50 dark:text-neutral-950'>{text}</Button>
    <button onClick={(e) => {
      // e.preventDefault()
      signIn('google')
    }}>login</button>
  )
}

export default SignInButton