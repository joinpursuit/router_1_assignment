import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import RandomImg from './RandomImg'
import BreedImg from './BreedImg'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route path="/random/:num" component={RandomImg} />
            <Route path="/randomBreed" component={BreedImg} />
            <Route exact path="/random" component={RandomImg} />
        </Switch>
      </div>
    );
  }
}

export default App;

//App
//NavBar
//RandomImg
//BreedImg
//Image
