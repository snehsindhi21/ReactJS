import React from 'react'
import style1 from "./Style1.css"

const Component1 = () => {
    console.log(style1);
  return (
    <div>
        <h1>Component1</h1>
        <button className={style1.button}>Button-1</button>
    </div>
  )
}

export default Component1