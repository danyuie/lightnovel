import React from 'react'
import Icon from '../global/svg/Icon'
type SearchProps = {
  placeholder: string,
}
const Search = ({placeholder}:SearchProps) => {
  return (
    <label className=' relative block w-[285px]'>
      <div className='absolute inset-y-0 left-0 pl-2 flex items-center justify-center'>
        <Icon name='Search' className='w-4 h-4 text-gray-400' />
      </div>
      <input type="text" placeholder={placeholder} className='w-full pl-8 gap-2 px-2 py-3 border-gray-200 border rounded cursor-pointer text-neutral-900 text-sm/4 placeholder:text-sm/4 placeholder:text-gray-400 focus:outline-none focus:border-green-600 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:border-neutral-800 bg-transparent dark:focus:border-green-900' />
    </label>
  )
}

export default Search