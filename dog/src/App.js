import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './NavBar';
import Random from './Random';
// import { Home } from './Home';
import RandomBreed from './RandomBreed';
import { withRouter } from 'react-router';

import './App.css';

const App = props => {
    return (
      <div className="App">
      <NavBar />
      <Switch>
        <Route  path='/random' component = { Random } />
        <Route  path="/randomBreed" component = {RandomBreed} />
      </Switch>
      </div>
    );
}

export default withRouter(App);
