import axios from "axios";
//! 1. for read users-> GET method
    export let getUsers = ()=>{
        return axios.get("http://localhost:5000/users")
    }

//! 2. for add users-> POST method
    export let addUser=(data)=>{
        return axios.post("http://localhost:5000/users",data)
    };

//! 2. for update users-> PUT/PATCH method
//! 2. for remove users-> DELETE method