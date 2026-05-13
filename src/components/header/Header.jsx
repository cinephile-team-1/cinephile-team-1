import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

function Header() {
  return (
    <header className='ct-header'>
        <p>CINEPHILE</p>
        <Navbar/>
        <Login/>
    </header>
  )
}

export default Header