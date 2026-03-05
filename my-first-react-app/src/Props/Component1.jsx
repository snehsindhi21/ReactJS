
import React from 'react'
import Component2 from './Component2';

const Component1 = () => {
    let employe = {
        eName : "Rishi",
        eAge : 20
    }
  return (
    <div>
      <h1>Parent Component1</h1>
      <hr />
      <Component2 {...employe} />
    </div>
  )
}

export default Component1