import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    //! If you want to 
    let data = useLoaderData();
    console.log(data);
  return (
    <div>
      User Component
    </div>
  )
}

export default Users