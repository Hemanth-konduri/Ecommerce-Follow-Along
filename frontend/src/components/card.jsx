 import React from 'react'
 import styles from "./Card.module.css"
 
 const card = ({product}) => {
   return (
     <div className={styles.card}>
        <img className={styles.product-img} src={product.img} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
     </div>
   )
 }
 
 export default card