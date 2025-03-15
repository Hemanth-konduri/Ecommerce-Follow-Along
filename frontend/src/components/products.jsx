 import React, { useEffect, useState } from 'react'
 import axios from "axios";
 import card from './card';
 import styles from "./products.module.css";

 
 const products = () => {
    const[products, setProducts] = useState([]);

  function getData(){
    axios.get("https://fakestoreapi.com/products")
    .then((data)=>{
        console.log(data);
        setProducts(data.data);
    }).catch((err)=>{
        console.log(console.log(err));
    })

  }
  
  getData();

  useEffect(()=>{
    getData();
  },[])


   return (
    <>
    <h1>Products</h1>
     <div className={styles.products}>{
        products.map((ele)=>{
            return <card key={ele.id} product={ele}/>
        })
        
        }</div>
        </>
   )
 }
 
 export default products