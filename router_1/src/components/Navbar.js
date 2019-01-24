import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="nav-wrapp blue darken-3">
      <div className="container">
        <a href="/" className="brand-logo left">DogApi React App</a>
        <ul className="right">
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/random'>RandomImg</Link> </li>
          <li><Link to='/randomBreed'>BreedImg</Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;