import React from 'react'

const IfElseRendering = () => {
    let isUserLoggedIn = true; // Change this to false to test the else condition
    if (isUserLoggedIn) {
        return (
            <div>
                <h1>Welcome back, User!</h1>
            </div>
        );
        
    } else {
        return (
            <div>
                <h1>Please log in to continue.</h1>
            </div>
        );
    }
//   return (
//     <div>
//         <h1>IfElseRendering</h1>
//     </div>
//   )
}

export default IfElseRendering