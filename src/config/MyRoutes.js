import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound from '../pages/AddProductTwo'
import ProductDetail from '../pages/ProductDetail'
import Products from '../pages/Products'
import AddProductTwo from '../pages/AddProductTwo'
const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/haqqimizda" element={<About/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/addproducttwo" element={<AddProductTwo/>}/>
    </Routes>
  )
}
export default MyRoutes