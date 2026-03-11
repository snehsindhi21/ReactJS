import React, { useState } from 'react'

const FormTask = () => {
    //!State
    let [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        gender:"",
        skills:[],
        city:"",
        resumeFile:null
    });

    //!Destructuring formData
    let {firstName, lastName, email, password, confirmPassword, gender, skills, city, resumeFile} = formData;

    //!handleInput
    let handleInput = (e) => {
        let {name, value, type, checked, files} = e.target;
        if(type === "checkbox"){
                setFormData((prevData)=>({ ...prevData,
                    skills : checked?[...prevData.skills, value]: prevData.skills.filter((skills)=>skills!=value)
                }));
        }
        else if(type === "file"){
                setFormData((prevData)=>({...prevData, resumeFile:files[0]}));
            }
        else{
                setFormData((prevData)=>({...prevData, [name]:value}));
            }
    }

    //!handleSubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        if (password===confirmPassword) {
            console.log(formData);
        setFormData({
         firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        gender:"",
        skills:[],
        city:"",
        resumeFile:null
        });
        } else {
           alert("Password and Confirm Password do not match!");
          
        setFormData({...formData,
            password:"",
            confirmPassword:"",
        }); 
        }
    }

  return (
    <div>
        <h1>Form Task - Registration Form</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name='firstName' id='firstName' value={firstName} onChange={handleInput}/>
            <br />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name='lastName' id='lastName' value={lastName} onChange={handleInput}/>
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' value={email} onChange={handleInput}/>
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' value={password} onChange={handleInput}/>
            <br />
            <br />
            <label htmlFor="confirmPassword">Confirm Password:</label>      
            <input type="password" name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={handleInput}/>
            <br />
            <br />
            <label>Gender:</label>
            <input type="radio" name='gender' value="Male" checked={gender === "Male"} onChange={handleInput}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' value="Female" checked={gender === "Female"} onChange={handleInput}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' value="Other" checked={gender === "Other"} onChange={handleInput}/>
            <label htmlFor="other">Other</label>
            <br />
            <br />
            <label>Skills:</label>
            <input type="checkbox" name='skills' value="html" checked={skills.includes("html")} onChange={handleInput}/>HTML
            <input type="checkbox" name='skills' value="css" checked={skills.includes("css")} onChange={handleInput}/>CSS
            <input type="checkbox" name='skills' value="javascript" checked={skills.includes("javascript")} onChange={handleInput}/>JavaScript
            <input type="checkbox" name='skills' value="react" checked={skills.includes("react")} onChange={handleInput}/>React
            <br />  
            <br />
            <label htmlFor="city">City:</label>
            <select name="city" id="city" value={city} onChange={handleInput}>
                <option value="">Select a city</option>
                <option value="New York">Ahmedabad</option>
                <option value="Los Angeles">Surat</option>
                <option value="Chicago">Mumbai</option>
                <option value="Houston">Delhi</option>
            </select>
            <br />
            <br />
            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" name='resume' id='resume' onChange={handleInput}/>
            <br />
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )

}
export default FormTask