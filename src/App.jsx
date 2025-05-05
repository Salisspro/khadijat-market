
import './App.css'
import Footer from './components/pages/Footer'
import Header from './components/pages/Header'
import Hero from './components/pages/Hero'
import Order from './components/pages/Order'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className=''>
      <Header />
      <Hero />
      <ProductList/>
      <Order />
      <Footer />
    </div>
  )
}

export default App
