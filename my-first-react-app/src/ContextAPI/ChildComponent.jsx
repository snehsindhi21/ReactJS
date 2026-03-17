import React, { useContext } from 'react'
import { MyContext } from './ParentComponent';

const ChildComponent = () => {

    //! Step 3: Consume the context
    let data= useContext(MyContext);
    console.log(data);
  return (
    <div>
        <h1>ChildComponent</h1>
        <h2>{data}</h2>
    </div>
  )
}

export default ChildComponent