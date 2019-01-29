import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='link'>Home</Link>
      <Link to='/random' className='link'> Random Image</Link>
      <Link to='/breed' className='link'> Breed Image</Link>
      <Link to='/*' className='link'> Catch All</Link>
    </nav>
  )
}

export default Navbar
