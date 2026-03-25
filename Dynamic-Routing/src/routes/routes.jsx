import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import UserDetails from "../components/UserDetails";
import DashBoard from "../components/DashBoard";

let myRoutes = createBrowserRouter([
     {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DashBoard/>
            },
            {
                path: "/user-details/:name/:id",
                element: <UserDetails/>
            }
        ]
    }
]);


export default myRoutes;