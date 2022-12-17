import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ setShowNavbar }) {

  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 15px 15px",
    textDecoration: "none",
    color: "black",
  };

  return (
    <nav onClick={() => setShowNavbar(false) } > 
      <NavLink exact to={'/'} style={linkStyles}><strong className='nav-link' >Home</strong></NavLink>
      <NavLink exact to={'/chronicles'} style={linkStyles}><strong className='nav-link'>Chronicles</strong></NavLink>
      <NavLink exact to={'/mental-health'} style={linkStyles}><strong className='nav-link'>Mental health</strong></NavLink>
      <NavLink exact to={'/blog'} style={linkStyles}><strong className='nav-link'>Blog</strong></NavLink>
      <NavLink exact to={'/contact-us'} style={linkStyles}><strong className='nav-link'>Contact us</strong></NavLink>
    </nav>
  )
}

export default Navbar
