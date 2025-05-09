
import React from 'react'

export default function Slide() {
  return (
    <div className='mt-20'>
      <div className="relative w-full h-[30em] ">
        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="" className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className='text-4xl font-bold'>Welcome to Our Online Store</h1>
          <p className='mt-4'>Discover the best products at unbeatable prices!</p>
        </div>
      </div>
    </div>
  )
}
