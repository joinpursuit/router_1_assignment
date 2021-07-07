import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import RandomImg from './randomImg.js'
import Image from './image.js'
import BreedImg from './breedImg.js'
import RandomDogCount from './randomDogCount.js'
import NavBar from './navbar.js'
import FavImages from './FavImg.js'
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state = {
      favImages: []


    }
    // this.handleAddFavImage = this.handleAddFavImage.bind(this)
    this.addImageToFav = this.addImageToFav.bind(this)
  }

// handleAddFavImage(){
//
//   let generateId;
//   // let funcUrl = url
// generateId = '_' + Math.random().toString(36).substr(2, 9);
//   let favoriteImageObject = {id: generateId, url: }
//   let slicedArr = this.state.favImages.slice(0)
//   // if(event.type === "click"){
// slicedArr.push(favoriteImageObject)
//
//
//   // console.log(favoriteImageObject, "this")
//   this.setState({
//     favImages: slicedArr
//   })
// // return favoriteImageObject
// // }
//
// }

addImageToFav(url){
  let { favImages } = this.state

  this.setState({
    favImages: [...favImages,url ]
  })
}


  render() {
    console.log(this.state.favImages, "this is the app state")
    return (
      <div className="App">
        <Route component={NavBar} />
        <Switch>
      <Route path="/randomimg/:count" component={RandomDogCount}/>
      <Route
        path="/randomImg"
        render={()=> {return <RandomImg handleAddFavImage={this.handleAddFavImage}
           addImageToFav={this.addImageToFav} />}}
      />

      <Route path="/breedImg" component={BreedImg} />
      <Route
         path="/favorites/"
         render={()=> {return <FavImages favImages={this.state.favImages}
         handleAddFavImage={this.handleAddFavImage}/>}}
      />

       <Route path="/favorites/:id"  />
        </Switch>
      </div>
    );
  }
}

export default App;
// <Route path="/randomImg" component={RandomImg} />
