import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/random'>Random</Link>
      <Link to='/by_breed'>Random By Breed</Link>
    </nav>
  )
}

export default NavBar
//{means you dont have to use object destructuring to import a file}
