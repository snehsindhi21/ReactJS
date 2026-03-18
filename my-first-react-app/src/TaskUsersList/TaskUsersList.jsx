import React, { useEffect, useState } from 'react'

const TaskUsersList = () => {
    //! State
    let[userData, setUserData] = useState([]);
    //! Fetch API
   
        let users = async ()=>{
         try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
           let data = await response.json();
           setUserData(data);
        }
        catch (error) {
        console.error("Error while fetching the data")   
    }
}

    //! UseEffect
    useEffect(()=>{
        users();
    },[])
  return (
    <div>
        <h1>TaskUsersList</h1>
        <main>
            {userData.map((user)=>{
                return (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.username}</h2>
                    <p>{user.email}</p>
                    <p>
                        {user.address.street},{user.address.city}
                    </p>
                    <p>Pincode: {user.address.zipcode}</p>
                    <p>{user.website}</p>
                    <p>{user.phone}</p>
                </div>)
            })}
        </main>
    </div>
  )
}

export default TaskUsersList