import React from 'react'

const ListRendering = () => {
    let names = ["Smit", "Sneh", "Rishi"]
  return (
    <>
    <h1>List and Keys in React JS</h1>
    <ul>
        {names.map((name, index)=>{
            return <li key={index}>{name}</li>
        })}
    </ul>
    </>
  )
}

export default ListRendering