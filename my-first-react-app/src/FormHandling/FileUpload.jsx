import React, { useState } from 'react'

const FileUpload = () => {
    let [file, setFile] = useState(null);

    let handleInputFile = (e) => {
        let file = e.target.files[0];
        setFile(file);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(file);
    }
  return (
    <div>
        <h1>Form Handling - Input type File</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="resume">Upload Resume:</label>
            <input type="file" name='resume' id='resume' onChange={handleInputFile}/>
            <br />
            <br />
            <button type="submit">Upload</button>
        </form>

        {file && (
            <div>
                <h2>File Details:</h2>
                <p>Name: {file.name}</p>
                <p>Size: {file.size} bytes</p>
                <p>Type: {file.type}</p>
            </div>
        )}
    </div>
  )
}

export default FileUpload