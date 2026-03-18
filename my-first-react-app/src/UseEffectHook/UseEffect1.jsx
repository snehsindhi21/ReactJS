import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    //! State for storing the users data
    let [userData,setUserData] = useState([]);

    //!Function to fetch API
    let fetchUsers = async ()=>{
        let response = await fetch("https://api.github.com/users");
        let data = await response.json();
        console.log(data);
        setUserData(data);
    }

    //! UseEffect
    useEffect(()=>{
        fetchUsers();
        //console.log("Component Rendered")
    },[]);
   

  return (
    <div>UseEffect1</div>
  )
}

export default UseEffect1