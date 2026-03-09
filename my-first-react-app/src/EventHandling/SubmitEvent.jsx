import React from 'react'

const SubmitEvent = () => {
    let handleChange=(e)=>{
        console.log(e.target.value);
    }

    let handleSubmit =(e)=>{
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form Submitted");
        
    }
  return (
    <div>
        <h1>onSubmit Event Demo</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="text">Enter text:</label>
            <input type="text" onChange={handleChange} />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SubmitEvent