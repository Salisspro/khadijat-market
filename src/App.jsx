
import './App.css'
import Footer from './components/pages/Footer'
import Header from './components/pages/Header'
import Hero from './components/pages/Hero'
import Order from './components/pages/Order'
import Slide from './components/pages/Slide'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className='
    bg-gradient-to-t from-slate-800 to-slate-600'>
      <Header />
      <Slide/>
      <Hero />
      <ProductList/>
      <Order />
      <Footer />
    </div>
  )
}

export default App
