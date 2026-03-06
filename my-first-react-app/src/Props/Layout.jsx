import React, { Children } from 'react'

const Layout = () => {
  return (
    <>
    <header>
        <h1>
            Welcome to My Website
        </h1>
    </header>
    <main>
        {Children}
    </main>
    <footer>
        @2026 All rights reserved
    </footer>
    </>
  )
}

export default Layout;