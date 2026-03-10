import React, { useState } from 'react'

const CheckBox = () => {

    //! State for CheckBox
    let [formData, setFormData] = useState({
        skills: []
    });

    let { skills } = formData;

    //!handleInputChange
    let handleInputChange = (e) => {
        let { value, checked } = e.target;
        if(checked){
            //!If checked is true that means add the skill to the given array
            setFormData({skills: [...skills, value]});
        }else{
            //!If checked is false that means remove the skill from the given array
            setFormData({skills: skills.filter((skill) => skill !== value)});
        }
    };

     //! handleSubumit
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(formData);
        setFormData({skills: []});
     };

  return (
    <div>
        <h1>Form Handling - CheckBox</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor=''>Select Skills:    </label>
            <label htmlFor="html">HTML</label>
            <input type="checkbox" id='html' name='skills' value="html" onChange={handleInputChange}  checked={skills.includes("html")}/> 
            <label htmlFor="css">   CSS</label>
            <input type="checkbox" id='css' name='skills' value="css" onChange={handleInputChange}  checked={skills.includes("css")}/> 
            <label htmlFor="js">    JavaScript</label>
            <input type="checkbox" id='js' name='skills' value="javascript" onChange={handleInputChange}  checked={skills.includes("javascript")}/> 
            <label htmlFor="react">     React</label>
            <input type="checkbox" id='react' name='skills' value="React" onChange={handleInputChange}  checked={skills.includes("React")}/> 
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CheckBox