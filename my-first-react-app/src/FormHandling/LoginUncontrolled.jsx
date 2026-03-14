import React, { createRef } from 'react'

const LoginUncontrolled = () => {
    let usernameRef = createRef();
    let passwordRef = createRef();

    //!handleSubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        console.log("Username:", username);
        console.log("Password:", password);
        usernameRef.current.value = "";
        passwordRef.current.value = "";
    }
  return (
    <div>
        <h1>Login Form Using Uncontrolled Components</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" ref={usernameRef} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginUncontrolled