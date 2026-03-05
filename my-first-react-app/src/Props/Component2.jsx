import React from 'react'

//! 2nd Way of Destructuring
const Component2 = ({eName, eAge}) => {
    console.log(eName);
    console.log(eAge);
  return (
    <div>
      <h1>Child Component2</h1>
    </div>
  )
}

export default Component2;