import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav>
        <Link to="/random">random</Link>
        {"  "}
        <Link to="/randomBreed">randomBreed</Link>
        {"  "}
        <Link to="/random/:num">randomNum</Link>
      </nav>
    )
  }
}

export default Navbar;
