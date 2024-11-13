import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer,Header,Contact,Benefits,Home,About } from './components'
function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout