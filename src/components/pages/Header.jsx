
import React, { useState } from 'react'
import NemuOpen from '../../assets/image/icon-menu.svg'
import NemuClose from '../../assets/image/icon-menu-close.svg'

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className='flex justify-between items-center bg-gray-200 p-4'>
      <div>
        <p>Khadijat</p>
        <p>market</p>
      </div>
      <div>
        <ul className='hidden md:flex gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <div className='md:hidden'>
          <img src={modal ? NemuClose : NemuOpen} alt="" onClick={() => setModal(!modal)} />
        </div>
        {modal && (
          <div className='absolute top-0 left-0 w-full h-screen bg-gray-200 flex flex-col items-center justify-center'>
            <ul className='flex flex-col gap-4'>
              <li onClick={()=>setModal(false)}>Home</li>
              <li onClick={()=>setModal(false)}>About</li>
              <li onClick={()=>setModal(false)}>Products</li>
              <li onClick={()=>setModal(false)}>Contact</li>
            </ul>
          </div>
        )}
        
      </div>
    </div>
  )
}
