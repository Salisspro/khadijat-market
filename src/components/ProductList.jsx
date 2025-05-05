
import React from 'react'
import IMG1 from '../assets/img/1746337235086.jpg'
import IMG2 from '../assets/image/images (1).jpg'
import IMG3 from '../assets/image/images.jpg'
import IMG4 from '../assets/image/maxresdefault.jpg'
import IMG5 from '../assets/image/photo.jpg'

export default function ProductList() {
   return (
      <div className='text-center '>
         <h2 className='text-3xl font-bold text mt-4 text-slate-500'>Our Products</h2>
         <div className='flex justify-center items-center '>
            <div className='grid md:grid-cols-3 md:gap-4 p-3 grid-flow-col-1 gap-4'>
               <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl '>
                  <img src={IMG1} alt="" className='rounded-lg w-full h-[17em]' />
                  <div className='p-4 '>
                     <h3 className='text-xl font-bold'>MILK CAKE</h3>

                     <p className='text-sm my-2 '>Description of the product goes here. It can be a brief overview of the product features and benefits.</p>

                     <div className='flex justify-between items-center'>
                        <p className='text-lg font-bold'>$20.00</p>
                        <button className='  text-slate-200 w-[10em] rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 '>Add to Cart</button>

                     </div>
                  </div>

               </div>
               <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl'>
                  <img src={IMG2} alt="" className='rounded-lg w-full h-[17em]' />
                  <div className='p-4'>
                     <h3 className='text-xl font-bold'>CHOCOLATE CAKE</h3>

                     <p className='text-sm my-2 '>Description of the product goes here. It can be a brief overview of the product features and benefits.</p>

                     <div className='flex justify-between items-center'>
                        <p className='text-lg font-bold'>$25.00</p>
                        <button className=' text-slate-200 w-[10em] rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 '>Add to Cart</button>

                     </div>
                  </div>
               </div>

               <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl'>

                  <img src={IMG4} alt="" className='rounded-lg w-full h-[17em]' />
                  <div className='p-4'>
                     <h3 className='text-xl font-bold'>VANILLA CAKE</h3>

                     <p className='text-sm my-2 '>Description of the product goes here. It can be a brief overview of the product features and benefits.</p>

                     <div className='flex justify-between items-center'>
                        <p className='text-lg font-bold'>$15.00</p>
                        <button className='  text-slate-200 w-[10em] rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 '>Add to Cart</button>
                     </div>
                  </div>

               </div>


               <div className='p-3 shadow-lg shadow-indigo-500/50 rounded-2xl'>

                  <img src={IMG5} alt="" className='rounded-lg w-full h-[17em]' />
                  <div className='p-4'>
                     <h3 className='text-xl font-bold'>VANILLA CAKE</h3>

                     <p className='text-sm my-2 '>Description of the product goes here. It can be a brief overview of the product features and benefits.</p>

                     <div className='flex justify-between items-center'>
                        <p className='text-lg font-bold'>$15.00</p>
                        <button className='text-slate-200 w-[10em] rounded bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2 '>Add to Cart</button>
                     </div>
                  </div>

               </div>




            </div>


         </div>
      </div>
   )
}
