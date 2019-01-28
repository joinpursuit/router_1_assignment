import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RandomDog from './RandomDog';
import { NavBar } from "./NavBar";
import MultiDog from "./MultipleDog";
import DogByBreed from "./DogByBreed";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/random" component={RandomDog} />
        <Route path="/random/:id" component={MultiDog} />
        <Route path="/randombreed" component={DogByBreed} />  
      </Switch>
    </div>
  )
}


export default App;











// import React, { Component } from 'react';
// import axios from "axios";
// import { RandomDog } from './RandomDog';
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       randomDog: []
//     }
//   }
//
//   getRandomDogImg = () => {
//     let prevDogs = this.state.randomDog;
//     axios.get("https://dog.ceo/api/breeds/image/random")
//     .then(response => {
//       this.setState({
//         randomDog: [...prevDogs, response.data.message]
//       });
//     });
//
//   }
//
//
//
//
//   componentDidMount() {
//     this.getRandomDogImg();
//   }
//
//   getNewDog = () => {
//     this.getRandomDogImg()
//   }
//
//   render() {
//     console.log('Random Dog APP',this.state.randomDog)
//     return (
//       <div>
//         <RandomDog newDogImg={this.getRandomDogImg} getNewDog={this.getNewDog} randomDog={this.state.randomDog}/>
//       </div>
//     );
//   }
// }
//
//
//
//
