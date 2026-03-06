import React from 'react'

const ProductsRendering = () => {
  return (
    <div>
        <h1>Products Rendering</h1>
        {ProductsRendering.map((item)=>{
            return(
                <div key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>  
                    <p>inStock:{String(item.inStock)}</p>
                    <hr />
                </div>
            )
        })}
    </div>
  )
}

export default ProductsRendering