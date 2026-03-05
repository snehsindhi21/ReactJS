import React from 'react';


const Child = (props) => {
    //* Here props is default parameter which will accept all the props which are passed from parent component
    console.log(props);
    //consuming props
    //console.log(props.name);

    //! 1st way of destructing:
    let {name,age,skills,status,jobHaiKya,isMarried,address,sayHello} = props;
    console.log(name);
    console.log(skills);
    console.log(status);
    console.log(skills[1]);

  return (
    <div>
        <h1>Child Component</h1>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Skills: {skills.join(', ')}</h2>
        <h2>Status: {status}</h2>
        <h2>Job: {jobHaiKya ? 'Yes' : 'No'}</h2>
        {/* we cant display true/false, null, undefined directly in JSX 
        to display it we have to typecast explicitly example {String(isMarried)} */}
        <h2>Married: {isMarried ? 'Yes' : 'No'}</h2>
        <h2>Address: {address}</h2>
        <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Child
