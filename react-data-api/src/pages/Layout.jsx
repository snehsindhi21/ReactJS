import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <main className='p-6'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout;