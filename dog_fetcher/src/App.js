import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.js'
import RandomDog from './RandomDog'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
          exact path='/'
          render={() =>
            {return <h1>Home</h1>}} //{no component required, can just return jsx}
          />
          <Route
          path='/random'
          component={RandomDog}

          />
          <Route
          path='/by_breed'
          render={() =>
            {return <h1>By Breed!</h1>}}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
