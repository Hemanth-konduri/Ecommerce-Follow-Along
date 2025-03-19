import React from 'react'
import {Route, Routes} from "react-router-dom";
import products from './components/products';
import Login from './components/Login';
import signup from './components/signup';
import AddProducts from './components/AddProducts';

const AllRouting = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<signup/>} />
        <Route path='/addProducts' element={<AddProducts/>}/>
      </Routes>
    </div>
  )
}

export default AllRouting