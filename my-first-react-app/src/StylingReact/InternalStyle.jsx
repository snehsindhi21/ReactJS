import React from 'react'

const InternalStyle = () => {
        let headingStyle = {
            color : "blue",
            backgroundColor : "lightgray",
            padding : "10px",
            borderRadius : "5px",
            textAlign : "center"
        };

    return (
    <div>
        <h1 style={headingStyle}>InternalStyle in React</h1>
    </div>
  )
}

export default InternalStyle