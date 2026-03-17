import React, { useContext } from 'react'
import { MyContext } from './ParentComponent';

const GrandChildComponent = () => {

    let data= useContext(MyContext);
        console.log(data);
  return (
    <div>
      <h1>GrandChildComponent</h1>
      <h2>{data}</h2>
    </div>
  )
}

export default GrandChildComponent