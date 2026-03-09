import React from 'react'

const TernaryOperator = () => {
    let isUserLoggedIn = true; // Change this to false to test the else condition
  return (
    <div>
        <h1>Conditional Rendering by using Ternary Operator</h1>
        {isUserLoggedIn ? (
            <h2>Welcome back, User!</h2>
        ) : (
            <h2>Please log in to continue.</h2>
        )}
    </div>
  )
}

export default TernaryOperator