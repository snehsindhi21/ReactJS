import React, { createContext, useContext, useState } from 'react'

//! Create a context
let CounterContext = createContext();
//console.log(CounterContext);


const CounterProvider = ({children}) => {
    
    let [count, setCount] = useState(0);
    //! Step 2: Provode the context

    return (
    <CounterContext.Provider value={{ count, setCount }}>
        {children}
    </CounterContext.Provider>
  )
}

//! Creating a custom hook to consume the context
export const useCounterContext = () => {
    return useContext(CounterContext);
}


export default CounterProvider