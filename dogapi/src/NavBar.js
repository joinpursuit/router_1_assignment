import React from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <nav>
      <Link to="/random">Random Dog</Link>
      {" | "}
      <Link to="/randombreed"> Random Breed</Link>
    </nav>
  )
}
