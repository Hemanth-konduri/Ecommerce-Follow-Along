import React from 'react'
import styles from "./card.module.css";
const myProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        <img className={styles.productImg} src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div>
            <buttons className="btn-del-edit">Edit</buttons>
            <buttons className="btn-del-edit">Delete</buttons>
        </div>
    </div>
  )
}

export default myProductCard