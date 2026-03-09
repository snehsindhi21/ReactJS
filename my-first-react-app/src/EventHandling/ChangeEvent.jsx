import React, { useState } from 'react'

const ChangeEvent = () => {
    let [char, setChar] = useState("");

    let handleChange = (e)=>{
        console.log(e.target.value);
        setChar(e.target.value);
        
    };

    let handleInput = (e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
        <h1>onChange and onInput Events</h1>
        <form action="">
            <label htmlFor="text">Change text:</label>
            <input type="text" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="text-input">Input text:</label>
            <input type="text" onInput={handleInput} />
        </form>
        
        <p>Change Event Value : {char}</p>
        
    </div>
  )
}

export default ChangeEvent