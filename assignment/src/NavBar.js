import React from "react";
import { Link } from "react-router-dom";

export const NavBar = props => {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/random"}>RandomImg</Link>
        <Link to={"/randomBreed"}>RandomBreed </Link>
      </nav>
    </>
  );
};
