import React, { useState } from 'react'

const SingleStateObject = () => {
    //!Single State Object Handling
    let [formData, setFormData]= useState({
        name: "",
        email: "",
        password: ""
    });

    //!Destructuring the formData object
    let {name, email, password} = formData;

    //!handleInputChange
    let handleInputChange = (e) => {
        //console.log("Name:", e.target.name);
        //console.log("Value:", e.target.value);
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value});
    };

    //! handleSubumit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(formData);
        setFormData({ 
            name: "",
            email: "",
            password: ""
        });
        
    };


  return (
    <div>
        <h1>Single State Object Handling</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' name='name' value={name} onChange={handleInputChange} />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' name='email' value={email} onChange={handleInputChange} />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' name='password' value={password} onChange={handleInputChange} />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SingleStateObject