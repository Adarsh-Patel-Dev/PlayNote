import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import "./navbar.css"
import { Toast } from "../Toast/Toast"

function Navbar() {
  const [logout, setLogout ] = useState(false);
  const encodedToken = localStorage.getItem("token")
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useLocation();             //location is obj {pathname, state, something}

  return (
    <div className='navbar'>
       <Link to="/home">
        <div className='navbar-brand-logo'>PlayNote</div>
       </Link>
        { encodedToken ?
          (<div className='navbar-logout'
         onClick={()=>{
          console.log("navvv")
            setLogout(true);
             localStorage.clear();
            window.location.reload();
             Toast({msg:"info", msg:"You have logged out."})
           }}
        >Logout</div>):(
          <div className='navbar-logout'
         onClick={()=>{
            navigate('/login', { state: { from: pathname } })
           }}
        >Login</div>
        )
        }
    </div>
  )
}

export  { Navbar }