
import React from 'react'
import IMG1 from '../milkImages/image_downloader_1746943875013.jpg'

import IMG2 from '../milkImages/image_downloader_1746943896125.jpg'

import IMG3 from '../milkImages/image_downloader_1746943935987.jpg'

import IMG4 from '../milkImages/image_downloader_1746944010113.jpg'

export default function Milks() {
   return (
      <div className='grid grid-flow-row gap-5 p-5'>
         <div className='border p-2'>
            <img className='rounded w-full h-[17em]' src={IMG1} alt="" />

            <div>
               <div className='flex items-center mt-5 justify-between '
               >
                  <div>
                     <p className='text-[19px] font-bold text-slate-800 '>
                        <span className='text-orange-500 text-4xl font-semibold'>10</span>
                        Piececes
                     </p>
                  </div>
               

               </div>

               <div className='flex  gap-5 text-[17px] font-semibold'>
                  <div className='mt-1'>
                     <div className=' grid grid-cols-6 gap-10 font-bold text-slate-700'>
                        <del className='text-2xl text-red-700 '>$10</del>
                        <span className='text-4xl text-blue-500 '>$5</span>
                        <button className='bg-orange-500 w-full p-2 col-span-4 rounded'>BUY</button>

                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div>
            <img className='rounded w-full h-[17em]' src={IMG2} alt="" />

         </div>

         <div>
            <img className='rounded w-full h-[17em]' src={IMG3} alt="" />

         </div>

         <div>
            <img className='rounded w-full h-[17em]' src={IMG4} alt="" />

         </div>

      </div>
   )
}
