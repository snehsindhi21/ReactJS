import React from 'react'
import style2 from "./Style2.css"

const Component2 = () => {
  console.log(style2);
  return (
    <div>
        <h1>Component2</h1>
        <button className={style2.button}>Button-2</button>
    </div>
  )
}

export default Component2;