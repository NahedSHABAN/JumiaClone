import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import ProductDetails from './components/productDetails/ProductDetails';
import './App.css'
import { CartProvider } from 'react-use-cart';


const App = () => {
  return (
    <div className=''>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/:id' element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
