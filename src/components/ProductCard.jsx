import React from 'react'
import ProductText from './ProductText'
import ProductImage from './ProductImage'
import ProductBtn from './ProductBtn'

const ProductCard = () => {
    const style = {
        border: "0.5px solid black",
        boxShadow: "2px 4px rgba(0, 0, 0, 0.2)",
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        padding: "16px"
    }
  return (
    <div style={style}>
        <ProductImage />
        <ProductText />
        <h3>N 5000</h3>
        <ProductBtn />
    </div>
  )
}

export default ProductCard