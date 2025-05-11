
import React from 'react'
import IMG from '../../assets/img/1746336704509.jpg'
import IMG2 from '../milkImages/image_downloader_1746944010113.jpg'
import IMG3 from '../../assets/image/xiaomi-redmi-a3-4g-64gb-schwarz-ohne-simlock-ohne-branding-001.jpg'
import IMG4 from '../shoes/image_downloader_1746945011981.jpg'

import IMG5 from '../../assets/image/PDM127P.webp'


export default function Hero() {
  return (
    <div className='w-full text-slate-700'>
      <div className='flex flex-col justify-center items-center mt-[3em] '>
        <h1 className='mt-20 text-3xl font-bold'>Our best sellers</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5  p-3 '>
          <div className='bg-gradient-to-t to-blue-200 from-orange-300 p-3 rounded'>
            <a href="/Milks">
              <img className='rounded-[10px] w-full h-[13em]' src={IMG2} alt="" />
              <p className=''>Milks</p>
            </a>
          </div>
          <div className='bg-gradient-to-t to-blue-200 from-orange-300 p-3 rounded'>
            <a href="/Phones">

              <img className='rounded-[10px] w-full h-[13em]' src={IMG3} alt="" />
              <p className=''>Phones</p>
            </a>
          </div>

          <div className='bg-gradient-to-t to-blue-200 from-orange-300 p-3 rounded'>
            <a href="/Shoes">

            <img className='rounded-[10px] w-full h-[13em]' src={IMG4} alt="" />
            <p className=''>Shoes</p>
            </a>
          </div>

          <div className='bg-gradient-to-t to-blue-200 from-orange-300 p-3 rounded'>
            <a href="/GirlsDress">

              <img className='rounded-[10px] w-full h-[13em]' src={IMG5} alt="" />
              <p className=''>Girls items</p>
            </a>
          </div>

          <a href="/SeeAll">
            <button className='text-blue-500'>See all</button>
          </a>
        </div>
      </div>
    </div>
  )
}
