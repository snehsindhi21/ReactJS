import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../components/Home'
import Users from '../components/Users'
import UserForm from '../LoginForm/UserForm'

let myRoutes = createBrowserRouter([{
    path : "/",
    element : <Layout/>,
    children : [{
        index: true,
        element: <Home/>},
    // {
    //     path: "/users",
    //     element: <Users/>,
    //     loader: async ()=>{
    //         try {
    //             let response = await fetch("https://api.github.com/users");
    //             let data = await response.json();
    //             return data;
    //         } catch (error) {
    //             console.log("Error While Fetching API:", error);
    //         }
    //     }
    // }
    {
    path : "/user-form",
    element: <UserForm/>    
    }]
    
}
    
])
export default myRoutes;