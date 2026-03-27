import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-20 shadow-2xl bg-white flex justify-between  px-20 gap-1 items-center'>
        <aside className='w-[20%] h-full flex justify-center gap-2 items-center'>
            <span className='text-2xl font-bold '>Data</span>
            <span className='text-2xl font-bold text-indigo-600'>API</span>
        </aside>
        <nav className='h-full w-[30%] flex justify-center items-center'>
            <ul className='flex justify-evenly items-center w-full h-full'>
                <li>
                    <NavLink to={"/"} className={({isActive})=> `text-lg font-bold ${isActive ? "text-indigo-600 underline" : "text-black"}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/user-form"} className={({isActive})=> `text-lg font-bold ${isActive ? "text-indigo-600 underline" : "text-black"}`}>User Form</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar