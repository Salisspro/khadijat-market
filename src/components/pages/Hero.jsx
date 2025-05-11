
import IMG2 from '../milkImages/image_downloader_1746943896125.jpg'
import IMG3 from '../../assets/image/xiaomi-redmi-a3-4g-64gb-schwarz-ohne-simlock-ohne-branding-001.jpg'
import IMG4 from '../shoes/image_downloader_1746945011981.jpg'

import IMG5 from '../../assets/image/614gnlfQt2L._AC_SL1500_.jpg'


export default function Hero() {
  return (
    <div className='w-full text-slate-700'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-20 text-3xl font-bold capitalize'>Our best sellers</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5  p-3 '>
          <div className='border p-2 rounded'>
            <a href="/Milks">
              <img className='rounded-[10px] w-full h-[13em]' src={IMG2} alt="" />
              <p className='text-[19px] my-2 font-bold'>Milks</p>
            </a>
          </div>
          <div className='border p-2 rounded'>
            <a href="/Phones">

              <img className='rounded-[10px] w-full h-[13em]' src={IMG3} alt="" />
              <p className='text-[19px] my-2 font-bold'>Phones</p>
            </a>
          </div>

          <div className='border p-2 rounded'>
            <a href="/Shoes">

            <img className='rounded-[10px] w-full h-[13em]' src={IMG4} alt="" />
            <p className='text-[19px] my-2 font-bold'>Shoes</p>
            </a>
          </div>

          <div className='border p-2 rounded'>
            <a href="/GirlsDress">

              <img className='rounded-[10px] w-full h-[13em]' src={IMG5} alt="" />
              <p className='text-[19px] my-2 font-bold '>Girls items</p>
            </a>
          </div>

          <a href="/SeeAll">
            <button className='text-blue-500 text-[18px] font-bold ml-2'>See all</button>
          </a>
        </div>
      </div>
    </div>
  )
}
