
import React, { useState } from 'react'
import NemuOpen from '../../assets/image/icon-menu.svg'
import NemuClose from '../../assets/image/icon-menu-close.svg'

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className=' flex items-center justify-between mx-5 '>
      <div className='text-2xl font-bold'>
        <a href="#" className='text-slate-200 capitalize'>online market</a>
      </div>
      <div className='hidden md:flex gap-4 z-10'>
        <a href="#" className='hover:text-slate-400'>Home</a>
        <a href="#" className='hover:text-slate-400'>Products</a>
        <a href="#" className='hover:text-slate-400'>About Us</a>
        <a href="#" className='hover:text-slate-400'>Contact Us</a>
      </div>
      <button onClick={() => setModal(!modal)} className='md:hidden'>
        <img className='' src={modal ? NemuClose : NemuOpen} alt="" />
      </button>
      {modal && (
        <div className='absolute top-16 left-0 right-0 bg-white text-black shadow-lg p-2 z-20 md:hidden min-h-screen
        ' >
          <a href="#" className='block py-2 hover:bg-gray-200'>Home</a>
          <a href="#" className='block py-2 hover:bg-gray-200'>Products</a>
          <a href="#" className='block py-2 hover:bg-gray-200'>About Us</a>
          <a href="#" className='block py-2 hover:bg-gray-200'>Contact Us</a>
        </div>
      )}

    </div>
  )
  }
