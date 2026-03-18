import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    //!State
    let [count1,setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    //! UseEffect
    useEffect(()=>{
        console.log("Count1 Updated");
    },[count1]);

    useEffect(()=>{
        console.log("Count2 Updated");
    },[count2])


  return (
    <div>
        <h1>UseEffect with multiple dependencies</h1>
        <h1>Count1: {count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>++</button>
        <button onClick={()=>{setCount1(count1-1)}}>--</button>
        <button onClick={()=>{setCount1(0)}}>reset</button>
        <br />
        <hr />
        <h1>Count2: {count2}</h1>
        <button onClick={()=>{setCount2(count2+1)}}>++</button>
        <button onClick={()=>{setCount2(count2-1)}}>--</button>
        <button onClick={()=>{setCount2(0)}}>reset</button>
    </div>
  )
}

export default UseEffect2