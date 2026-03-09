import React from 'react'

const EventWithParameter = () => {
    //! Event with parameter
    let handleName =(name)=>{
        alert(`Hello ${name}, Welcome to React JS!`);
    }
    let handleAge =(age)=>{
        alert(`Your age is ${age}`);
    }
  return (
    <div>
      <h1>Event with Parameter</h1>
      <button onClick={() => {handleName("Alice"); handleAge(25)}}>Click me (Name)</button>
    </div>
  )
}

export default EventWithParameter