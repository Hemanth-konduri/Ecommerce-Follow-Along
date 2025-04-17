import React from 'react'
import {Route,Routes} from "react-router-dom";
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import CartCard from './components/cartCard';
import userAddress from './components/userAddress';
const AllRouting = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/myproducts' element={<myProducts/>}/>
        <Route path='/myproductcard' element={<myProductCard/>}/>
        <Route path='/cart' element={<cartCard/>}/>
        <Route path='/userAddress' element={<userAddress/>}/>
    </Routes>
  )
}

export default AllRouting