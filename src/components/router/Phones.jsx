
import React from 'react'
import IMG1 from '../phoneImages/image_downloader_1746907534125.jpg'

import IMG2 from '../phoneImages/image_downloader_1746907546815.jpg'

import IMG3 from '../phoneImages/image_downloader_1746907551876.jpg'

import IMG4 from '../phoneImages/image_downloader_1746907576794.jpg'



export default function Phones() {
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

      </div>
   )
}
