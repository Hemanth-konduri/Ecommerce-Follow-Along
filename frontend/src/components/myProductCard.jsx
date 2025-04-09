import React from 'react'
import styles from "./card.module.css";
const myProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        <img className={styles.productImg} src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div style={{
          display:"flex",
          justifyContent:"space-around",
          padding:"0.5rem"
        }}>
            <buttons className="btn-del-edit" style={{
              backgroundColor:"grey", border:"1px solid",
              borderRadius:"0.3rem", width:"3rem"
            }}>Edit</buttons>
            <buttons className="btn-del-edit" style={{
              backgroundColor:"grey", border:"1px solid",
              borderRadius:"0.3rem", width:"3rem"
            }}>Delete</buttons>
        </div>
    </div>
  )
}

export default myProductCard