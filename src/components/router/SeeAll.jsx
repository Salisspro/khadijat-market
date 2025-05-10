

import React from 'react'

export default function SeeAll() {
  return (
    <div className='h-screen bg-amber-100'>
      <h1>See all Product</h1>
      <div>
         <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5  p-3 shadow-lg shadow-indigo-500/10 '>
            <div>
               <img className='h-[13em] ' src="https://example.com/image1.jpg" alt="" />
               <p className=''>Product 1</p>
            </div>
            <div>
               <img className='h-[13em] ' src="https://example.com/image2.jpg" alt="" />
               <p className=''>Product 2</p>
            </div>
            <div>
               <img className='h-[13em] ' src="https://example.com/image3.jpg" alt="" />
               <p className=''>Product 3</p>
            </div>
            <div>
               <img className='h-[13em] ' src="https://example.com/image4.jpg" alt="" />
               <p className=''>Product 4</p>
            </div>
            
            <div>
               <img className='h-[13em] ' src="https://example.com/image5.jpg" alt="" />
               <p className=''>Product 5</p>
               </div>


            <div>
               <img className='h-[13em] ' src="https://example.com/image6.jpg" alt="" />
               <p className=''>Product 6</p>
            </div>
         </div>
      </div>
    </div>
  )
}
