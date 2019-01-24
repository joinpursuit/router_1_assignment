import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// class NavBar extends Component {
//   constructor(){
//     super()
//     // this.state = {
//     //
//     // }
//   }
//   render() {
//     return (
//       <div className="App">
//         navigation bar
//       </div>
//     );
//   }
// }

const NavBar = (props) => {

  return(
    <>
    <nav>
  <Link to={"/randomImg"}>randomImage </Link>
  <Link to={"/breedImg"}> breed</Link>

  </nav>
  </>
)
}

export default NavBar;
