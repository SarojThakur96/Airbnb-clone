import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const SmallCard: NextPage<{
  img: string
  location: string
  distance: string
}> = ({ img, location, distance }) => {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center 
    space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 
    transition-transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className='font-semibold'>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
