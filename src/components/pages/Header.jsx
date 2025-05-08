
import React, { useState } from 'react'
import NemuOpen from '../../assets/image/icon-menu.svg'
import NemuClose from '../../assets/image/icon-menu-close.svg'

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className='grid  justify-between fixed top-0 items-center z-10 bg-blue-500 w-full'>
      <div className='p-5 '>
        <ul className='hidden md:flex gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <div className='md:hidden flex items-center '>
          <img src={modal ? NemuClose : NemuOpen} alt="" onClick={() => setModal(!modal)} />
          <div>
            <p>sign up</p>

          </div>
        </div>
        {modal && (
          <div className='absolute top-0 left-0 w-full h-screen bg-gray-200 flex flex-col items-center justify-center'>
            <ul className='flex flex-col gap-4'>
              <li onClick={() => setModal(false)}>Home</li>
              <li onClick={() => setModal(false)}>About</li>
              <li onClick={() => setModal(false)}>Products</li>
              <li onClick={() => setModal(false)}>Contact</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}
