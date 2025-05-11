
import React from 'react'
import IMG1 from '../milkImages/image_downloader_1746943875013.jpg'

import IMG2 from '../milkImages/image_downloader_1746943896125.jpg'

import IMG3 from '../milkImages/image_downloader_1746943935987.jpg'

import IMG4 from '../milkImages/image_downloader_1746944010113.jpg'

export default function Milks() {
   return (
      <div className='grid grid-flow-row gap-5 p-10'>
         <div>
            <img className='rounded w-full h-[17em]' src={IMG1} alt="" />


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
