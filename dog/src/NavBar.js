import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  return(
    <>
      <nav>
        <Link to={"/random/1"}>Random </Link>
        <Link to={"/randomBreed"}>Random by Breed</Link>
        <Link to={"/"}>Home</Link>
      </nav>
    </>
  )
}
