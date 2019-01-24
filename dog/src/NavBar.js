import React from 'react';
import "./App.css"
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  return(
    <>
      <nav>
        <Link to={"/random"}> Random </Link>
        <Link to={"/randomBreed"}> Random by Breed </Link>
      </nav>
    </>
  )
}
