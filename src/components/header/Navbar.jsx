import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className='ct-navbar'>
        <NavLink to={"/"}>Movies</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
    </nav>
  )
}

export default Navbar