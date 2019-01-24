import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import RandomImg from './randomImg.js'
import Image from './image.js'
import BreedImg from './breedImg.js'
import RandomDogCount from './randomDogCount.js'
import NavBar from './navbar.js'
import './App.css';


class App extends Component {
  constructor(){
    super()
    // this.state = {
    //
    // }
  }
  render() {
    return (
      <div className="App">
        <Route component={NavBar} />
        <Switch>
      <Route path="/randomimg/:count" component={RandomDogCount}/>
      <Route path="/randomImg" component={RandomImg} />
      <Route path="/breedImg" component={BreedImg} />
        </Switch>
      </div>
    );
  }
}

export default App;
