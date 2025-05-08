
import React, { useState } from 'react'
import NemuOpen from '../../assets/image/icon-menu.svg'
import NemuClose from '../../assets/image/icon-menu-close.svg'

export default function Header() {
  const [modal, setModal] = useState(false)
  return (
    <div className='flex items-center justify-between p-5 bg-gradient-to-r from-slate-300 to-slate-700'>
      <button className='' onClick={() => setModal(!modal)}>
        <img src={modal ? NemuClose : NemuOpen} alt="" />
      </button>
      <div>
        sign in
      </div>
      

    </div>
  )
}
