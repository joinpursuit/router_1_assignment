import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./NavBar.js";
import RandomImg from "./RandomImg.js";
import BreedImg from "./BreedImg.js";
import Home from "./Home.js";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/random" component={RandomImg} />
          <Route path="/random/:num" component={RandomImg} />
          <Route exact path="/randomBreed" component={BreedImg} />
        </Switch>
      </div>
    );
  }
}

export default App;
