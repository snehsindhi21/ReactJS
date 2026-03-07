import React, { useState } from 'react'

const ProductCard = (props) => {
    let [msg, setMsg] = useState("");
    console.log(props);

    let addToCart  = () => {
        if(props.product.inStock){
            setMsg("Product Add To Cart Successfully👍")
        } else {
            setMsg("Product is Out of Stock👎");
        }
    }
  return (
    <div>
      <h1>Name : {props.product.name}</h1>
      <h2>Price : {props.product.price}</h2>
      <p>Stock : {props.product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button onClick={addToCart}>Add To Card</button>
      <p>{msg}</p>
      <hr />
    </div>
  )
}

export default ProductCard