
import React from 'react'

export default function Footer() {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center bg-gray-200 p-10'>
        <p className='text-center bg-gray-200 '>Khadijat Market</p>
        <p className='text-center bg-gray-200 '>All rights reserved &copy; 2023</p>
        <p className='text-center bg-gray-200'>Follow us on social media</p>
        <div className='flex justify-center items-center gap-4 p-5'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
      </div>
    </div>
  )
}
