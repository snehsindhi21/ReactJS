import React from 'react'

const InlineEvent = () => {
  return (
    <div>
        <h1>Inline Event Handling</h1>
        <button onClick={()=>console.log("Button clicked!")}>Click me</button>
    </div>
  );
};

export default InlineEvent;