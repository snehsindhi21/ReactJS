import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    let navigate = useNavigate();

    let [userData, setUserData]= useState([]);
    console.log(userData);

    let fetchUsers = async()=>{
        let response = await fetch("https://dummyjson.com/users");
        let data = await response.json();
        setUserData(data.users);
    };

    useEffect(()=>{
        fetchUsers();
    },[userData.id]);

    //! HandleUserDetails
    let handleUserDetails =(user)=>{
        navigate(`/user-details/${user.firstName}/${user.id}`,{state: user});
    };

  return (
    <section>
        <h1 className='text-3xl text-center font-semibold m-3'>Users List</h1>
        <main className='w-full flex flex-wrap justify-evenly gap-5'>
            {userData.map((user)=>{
                return (
                    <div key={user.id} className='w-[20%] h-62.5 bg-white p-3 rounded shadow-lg flex flex-col justify-center items-center gap-5'>
                        <img src={`${user.image}`} alt={`{user.firstName}`} />
                        <button onClick={()=>handleUserDetails(user)} className='py-2 px-6 bg-rose-600 text-white hover:bg-rose-700 cursor-pointer rounded'>Visit For More Details</button>
                    </div>
                )
            })}
        </main>
    </section>
  )
}

export default DashBoard