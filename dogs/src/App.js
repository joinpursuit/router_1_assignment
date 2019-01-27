import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import RandomImg from './RandomImg'
import BreedImg from './BreedImg'
import Navbar from './Navbar'
import { FavImages } from './FavImages'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favArray: []
    }
  }
  addFavImage = (event) => {
    //url passed from Image component (prop?)
    let favUrl = event.target.src;
    let currentArr = this.state.favArray;
    //prevent dupes
    let isFav = currentArr.find(dog => dog.url === favUrl)
    if (isFav) {
      //delete dog
      let favIdx = currentArr.findIndex(dog => {
        return (dog === isFav)
      })
      currentArr.splice(favIdx,1)
    } else {
      //compile URL and ID into an Object
      let generateId = Math.random().toString(36).slice(2)
      let favDog = {  id: generateId,
                      url: favUrl }
      //add picture Object to this.state array
      currentArr.push(favDog)
    }
    this.setState({
      favArray: currentArr
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
            <Route
              path="/random/:num"
              render={(props) => <RandomImg {...props} addFavImage={this.addFavImage}/>}
            />
            <Route
              path="/randomBreed"
              render={(props) => <BreedImg {...props} addFavImage={this.addFavImage}/>}
            />
            <Route
              exact path="/favorites"
              render={(props) => <FavImages {...props} favArray={this.state.favArray}/>}
            />
            <Route
              exact path="/favorites/:id"
              render={(props) => <FavImages {...props} favArray={this.state.favArray}/>}
            />
            <Route
              exact path="/random"
              render={(props) => <RandomImg {...props} addFavImage={this.addFavImage}/>}
            />
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

//Todo : add css to fav images
