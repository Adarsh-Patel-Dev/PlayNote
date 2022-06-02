import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-brand-logo'>PlayNote</div>
        <div className='navbar-logout'>Logout</div>
    </div>
  )
}

export  { Navbar }