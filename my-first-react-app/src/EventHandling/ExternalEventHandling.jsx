import React from 'react'

const ExternalEventHandling = () => {
    //! External Event Handling
    let handleClick = (e) => {
        console.log(e); // SyntheticBaseEvent provide by react
        console.log(e.nativeEvent); // Native event provided by browser //PointerEvent, MouseEvent, KeyboardEvent
        console.log("e.target : ", e.target);
    };

  return (
    <div>
        <h1>External Event Handling</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ExternalEventHandling