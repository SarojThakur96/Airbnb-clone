import React from 'react'
import Image from 'next/image'
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          className="flex-grow bg-transparent pl-5 outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* right */}
        <div className="flex space-x-4 justify-end items-center text-gray-500">
           <p className='hidden md:inline cursor-pointer'>Become a host</p>
           <GlobeAltIcon className="h-6 cursor-pointer"/>
           <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
               <MenuIcon className='h-6'/>
               <UserCircleIcon className='h-6'/>
           </div>
        </div>    
    </header>
  )
}

export default Header
