import React, { createContext } from 'react'

//! Step 1:Create a context
   export let MyContext = createContext();
   //console.log(MyContext);

const ParentComponent = ({ children }) => {
    //! Step 2: Provode the context
   return (
    <MyContext.Provider value={"Hello from Parent Component"}>
        {children}
    </MyContext.Provider>
  )
}

export default ParentComponent