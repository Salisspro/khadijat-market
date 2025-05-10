
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Slide from './Slide'
import ProductList from '../ProductList'
import Footer from './Footer'

export default function Main() {
  return (
    <div>
      <Header/>
      <Slide/>
      <Hero/>
      <ProductList/>
      <Footer/>
    </div>
  )
}
