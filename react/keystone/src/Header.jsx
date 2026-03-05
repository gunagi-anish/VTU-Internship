import React from 'react'
import "./App.css";


function Header() {
    return (
        <div>
            <nav className='navbar'>
            <a href='/' className='navlinks'>Home</a>
            <a href='/services' className='navlinks'>Services</a>
            <a href='/blog' className='navlinks'>Blog</a>
            <a href='/login' className='navlinks'>Login</a>
            <a href='/createenquiry' className='navlinks'>Create Enquiry</a>
            </nav>
        </div>
    )
}

export default Header
