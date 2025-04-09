import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import styles from "./products.module.css";

const cartCard = () => {
    const [products,setProducts] = useState([]);
    function getData(){
        axios.get("https://localhost:8080/allproducts")
        .then((data)=>{
            console.log(data);
            const userData = JSON.parse(localStorage.getItem("follow-along-auth-token-user-name-id"));
            const newData = data.data.products.filter((ele)=>{
                return ele.userId = userData.i;
            })
            setProducts(data.data);
        }).catch((err)=>{
            console.log(console.error(err));
        })
    }


    useEffect(()=>{
        getData();
    },[])

  return (
    <>
        <h1>Products</h1>
        <div className={styles.products}>
        {
            products.map((ele)=>{
                return <myProductCard key={ele.id} product={ele}/>
            })
        }
    </div>
    </>
  )
}

export default cartCard;