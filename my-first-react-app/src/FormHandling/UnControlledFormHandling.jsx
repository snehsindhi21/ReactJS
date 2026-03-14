import React, { useRef } from 'react'

const UnControlledFormHandling = () => {

    //! useRef():
    //* The useRef hook is used to provide the direct access to the dom elements without re-rendering the component.
    //* It is used to provide the reference of the dom element.
    let inputRef = useRef(null);
    console.log(inputRef); //! {current: null} -> current is the property of the useRef hook which is used to access the dom element.

    let provideRef= ()=>{
        inputRef.current.focus();
        console.log(inputRef.current);
        console.log(inputRef.current.value);
        
    }
  return ( 
    <div>
        <h1>UnControlledFormHandling</h1>
        
            <label htmlFor='Username'>Username:</label>
            <input type="text" id='Username' ref={inputRef} />
            <button onClick={provideRef}>Provide Reference</button>
    </div>
  )
}

export default UnControlledFormHandling