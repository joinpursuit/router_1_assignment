import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import Random from './Random';
// import { Home } from './Home';
import { RandomBreed }  from './RandomBreed';
import { withRouter } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/random/:num' component={Random} />
        <Route exact path="/randomBreed" component={RandomBreed} />


      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
