
import React from 'react'
import IMG from '../../assets/img/1746336704509.jpg'
import IMG2 from '../../assets/image/s-l1600.webp'
import IMG3 from '../../assets/image/xiaomi-redmi-a3-4g-64gb-schwarz-ohne-simlock-ohne-branding-001.jpg'
import IMG4 from '../../assets/image/614gnlfQt2L._AC_SL1500_.jpg'

import IMG5 from '../../assets/image/PDM127P.webp'


export default function Hero() {
  return (
    <div className='text-center mb-[7em] p-5 '>
      <div className='flex flex-col justify-center items-center mt-[10em]'>
        <h1 className='text-3xl font-bold'>Welcome to our bakery</h1>
        <p className='text-slate-500'>We make the best cakes in town</p>
        <button className='bg-slate-500 text-white p-2 rounded-md mt-4'>See our products</button>
      </div>
    
      <div className='flex flex-col justify-center items-center mt-[3em]'>
        <h1>Our best sellers</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 border-2 border-slate-500 p-5'>
          <div>
            <p className='text-slate-500 '>Redmi A3  </p>
            <img className='' src={IMG2} alt="" />
            <p>Price: 1000</p>
          

            </div>
          <div>
            <p className='text-slate-500'>Redmi A3  </p>
            <img className='' src={IMG3} alt="" />
            <p>Price: 1000</p>


          </div>
          <div>
            <p className='text-slate-500'>women dress  </p>
            <img className='' src={IMG4} alt=""/>
            <p>Price: 1000</p>
            </div>
          <div>
            <p className='text-slate-500'>
              Milks cake
            </p>
            <img className='' src={IMG5} alt="" />
            <p>Price: 1000</p>
            </div>
          <a href="">
            <button className='text-blue-500'>See all</button>
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-[5em]'>
        <h1>Items for all ages</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 border-2 border-slate-500 p-5'>
          <div><img src={IMG} alt="" /></div>
          <div><img src={IMG} alt="" /></div>
          <div><img src={IMG} alt="" /></div>
          <div><img src={IMG} alt="" /></div>
          <a href="">
            <button className=' p-2 rounded-md'>See all</button>
          </a>
        </div>
      </div>

    </div>
  )
}
