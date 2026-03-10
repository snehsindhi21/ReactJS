import React, { useState } from 'react'

const RadioInput = () => {
    const [formData, setFormData] = useState({
        gender: ""
    });
    const [displayGender, setDisplayGender] = useState("");

    //!handleInputChange
    let handleInputChange = (e) => {
        setFormData({
            ...formData,gender: e.target.value
        });
    };

     //! handleSubumit
     const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayGender(formData.gender);
        console.log("Form Submitted");
        console.log(formData);
        setFormData({gender: ""});
     };

  return (
    <div>
        <h1>File Handling - Radio Input</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Gender:</label><br />
            <label htmlFor="male">Male</label>
            <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} checked={formData.gender==="male"} /> <br />
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} checked={formData.gender==="female"} /> <br />
            <label htmlFor="others">Others</label>
            <input type="radio" id="others" name="gender" value="others" onChange={handleInputChange} checked={formData.gender==="others"} /> <br />
            <button type="submit">Submit</button>
            <h1>Your Gender is: {displayGender}</h1>
        </form>
    </div>
  )
}

export default RadioInput