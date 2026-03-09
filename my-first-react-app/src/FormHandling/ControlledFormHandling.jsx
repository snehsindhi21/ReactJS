import React, { useState } from 'react'

const ControlledFormHandling = () => {
    //! State for username input field
    let [username, setUsername] = useState("");
    //console.log("Username:", username);

    //! State for password input field
    let [password, setPassword] = useState("");
    //console.log("Password:", password");

    //! Handle change for username input field
    const handleUsername = (e) => {
        //console.log("Username:", e.target.value);
        setUsername(e.target.value);
    };

    //! Handle change for password input field
    const handlePassword = (e) => {
        //console.log("Password:", e.target.value);
        setPassword(e.target.value);
    };

    //! handleSubumit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Username:", username);
        console.log("Password:", password);
        setUsername("");
        setPassword("");
    };

    return (
    <div>
        <h1>Form Handling in React JS</h1>
        <h2>2. Controlled Way</h2>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsername}
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
            />
            <br />
            <br />
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default ControlledFormHandling