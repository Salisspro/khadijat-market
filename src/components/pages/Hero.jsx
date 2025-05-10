
import React from 'react'
import IMG from '../../assets/img/1746336704509.jpg'
import IMG2 from '../../assets/image/images.jpg'
import IMG3 from '../../assets/image/xiaomi-redmi-a3-4g-64gb-schwarz-ohne-simlock-ohne-branding-001.jpg'
import IMG4 from '../../assets/image/614gnlfQt2L._AC_SL1500_.jpg'

import IMG5 from '../../assets/image/PDM127P.webp'


export default function Hero() {
  return (
    <div className='text-slate-300'>
      <div className='flex flex-col justify-center items-center mt-[3em] '>
        <h1 className='mt-20 text-3xl text-slate-100 font-bold'>Our best sellers</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5  p-3 shadow-lg shadow-indigo-500/10 '>
          <div>
            <img className='h-[13em] ' src={IMG2} alt="" />
            <p className=''>Milk cake  </p>
          

            </div>
          <div>
            <img className='h-[13em] ' src={IMG3} alt="" />
            <p className=''>Redmi A3  </p>


          </div>
          <div>
            <img className='h-[13em] ' src={IMG4} alt=""/>
            <p className=''>women dress  </p>
            </div>
          <div>
            <img className='h-[13em] ' src={IMG5} alt="" />
            <p className=''>Princess dress</p>
            </div>
          <a href="">
            <button className='text-blue-500'>See all</button>
          </a>
        </div>
      </div>
    </div>
  )
}
