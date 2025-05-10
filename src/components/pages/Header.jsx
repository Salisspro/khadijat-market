
import React, { useState } from 'react'
import NemuOpen from '../../assets/image/icon-menu.svg'
import NemuClose from '../../assets/image/icon-menu-close.svg'

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className='flex justify-between items-center p-4 bg-gradient-to-l from-slate-200 to-slate-900 text-white'>
      <div className='text-2xl font-bold '>
        <a href="#" className='text-slate-200 capitalize'>online market</a>
        <div>
          <p className='text-sm text-slate-200'>Your one-stop shop for everything</p>

        </div>

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
        <div className='absolute top-16 right-0 bg-white text-black w-48 shadow-lg rounded-md p-4 z-20 md:hidden
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
