import React from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import ProductNotFound from './page/ProductNotFound'
import ProdDetails from './page/ProdDetails'
import Shop from './page/Shop'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'
import Checkout from './page/Checkout'
const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ProdDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<ProductNotFound />} />
        </Routes>
    </>
  )
}

export default App
