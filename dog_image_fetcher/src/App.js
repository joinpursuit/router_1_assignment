import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BreedImg from './BreedImg'
import RandomImg from './RandomImg'

import Navbar from './COMPONENTS/Navbar'
import CatchAll from './COMPONENTS/CatchAll'
// import Image from './COMPONENTS/Image'

import './CSS/App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path= '/' render={ () => {return <h1>Home</h1>}} />
          <Route path='/random' render={ () => { return <RandomImg/>}} />
          <Route path='/breed' render={ () => {return <BreedImg/>}} />
          <Route path='/*' component={CatchAll} />
        </Switch>
      </div>
    );
  }
}

export default App;
