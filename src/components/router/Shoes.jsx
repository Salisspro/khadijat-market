import React from 'react'
import IMG1 from '../shoes/image_downloader_1746945011981.jpg'
import IMG2 from '../shoes/image_downloader_1746945021664.jpeg'
import IMG3 from '../shoes/image_downloader_1746945026813.jpg'
import IMG4 from '../shoes/image_downloader_1746945081184.jpg'
import IMG5 from '../shoes/image_downloader_1746945083801.jpg'
import IMG6 from '../shoes/image_downloader_1746945092118.jpg'
import IMG7 from '../shoes/image_downloader_1746945096365.jpg'
import IMG8 from '../shoes/image_downloader_1746945098447.jpg'
import IMG9 from '../shoes//image_downloader_1746945113563.png'


export default function Shoes() {
   return (
      <div className='grid grid-flow-row gap-5 p-10'>
         <div>
            <img className='rounded' src={IMG1} alt="" />


         </div>

         <div>
            <img src={IMG2} alt="" />

         </div>

         <div>
            <img src={IMG3} alt="" />

         </div>

         <div>
            <img src={IMG4} alt="" />

         </div>

         <div>
            <img src={IMG5} alt="" />

         </div><div>
            <img src={IMG6} alt="" />

         </div>
         <div>
            <img src={IMG7} alt="" />

         </div>
         <div>
            <img src={IMG8} alt="" />

         </div>
         <div>
            <img src={IMG9} alt="" />

         </div>

      </div>
   )
}
