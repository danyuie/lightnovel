import React from 'react'

type Props = {
  children: string
}

const LinkItem = ({children}: Props) => {
  return (
    <div className='p-5 font-medium text-base text-neutral-950 dark:text-neutral-50'>{children}</div>
  )
}

export default LinkItem