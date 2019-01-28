import React from "react";
import RandDog from "./RandDog";
import MultiDogs from "./MultiDogs";
import SpecificBreed from "./SpecificBreed";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/random">Random Dog</Link>
          <Link to="/random/breedList">Random Dog By Breed</Link>
          <Link to="/random/count">Random Dog By Count</Link>
        </nav>
        <Switch>
          Home
          <Route exact path="/random" component={RandDog} />
          <Route exact path="/random/breedList" component={SpecificBreed} />
          <Route path="/random/count" component={MultiDogs} />
        </Switch>
      </>
    );
  }
}

export default App;
