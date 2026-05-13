import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className='ct-navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/pricing"}>Pricing</Link>
        <Link to={"/contact"}>Contact</Link>
    </nav>
  )
}

export default Navbar