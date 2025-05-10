
import React from 'react'
// import IMG from ''

export default function SeeAll() {
  return (
    <div className='bg-slate-500 min-h-screen'>
      <img src="" alt="" />
      
      <div className='grid md:grid-cols-3 md:gap-4 p-3 grid-flow-col-1 gap-4'>
        <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Pgk-MjdvCtmvLRvjEiO2Cko4AQzwUhx6GA&s" alt="" className='rounded-lg w-full h-[17em]' />
          <div className='p-4 '>
            <h3 className='text-xl font-bold'>Product 1</h3>
            <p className='text-sm my-2 '>Description of the product goes here.</p>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>$20.00</p>
              <button className='text-slate-200 w-[10em] rounded border p-2'>Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Repeat similar blocks for other products */}
         <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcZNksk5WAinSfsLBBvdrbibrzpsumrMTODFWLRZyvL_g3aBe1zcInhCjPldwt63owmM&usqp=CAU" alt="" className='rounded-lg w-full h-[17em]' />
            <div className='p-4'>
               <h3 className='text-xl font-bold'>Product 2</h3>
               <p className='text-sm my-2 '>Description of the product goes here.</p>
               <div className='flex justify-between items-center'>
               <p className='text-lg font-bold'>$25.00</p>
               <button className='text-slate-200 w-[10em] rounded border p-2'>Add to Cart</button>
               </div>
            </div>
            </div>

         <div className=' p-3 shadow-lg shadow-indigo-500/50 rounded-2xl'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf2v89aIP4JOovQqTpr1anrG6m5BOkMrMUTMUc-FjglWC0naigSQi-jG5CSXs-c5FawE&usqp=CAU" alt="" className='rounded-lg w-full h-[17em]' />
            <div className='p-4'>
               <h3 className='text-xl font-bold'>Product 3</h3>
               <p className='text-sm my-2 '>Description of the product goes here.</p>
               <div className='flex justify-between items-center'>
               <p className='text-lg font-bold'>$15.00</p>
               <button className='text-slate-200 w-[10em] rounded border p-2'>Add to Cart</button>
               </div>
            </div>

            
            </div>
        </div>
    </div>
  )
}
