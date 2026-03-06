import React, { useState } from 'react'

const UpdatingMultipleStates = () => {
  let [name, setName] = useState("John");
  let [age, setAge] = useState(21);

  let updateUserData=()=>{
    setName("Sneh");
    setAge(22);
  };

    return (
    <>
    <h1>Updating Multiple States Example</h1>
    <h2>Name:{name}</h2>
    <h2>Age:{age}</h2>
    <button onClick={updateUserData}>Update Data</button>
    </>
  )
}

export default UpdatingMultipleStates