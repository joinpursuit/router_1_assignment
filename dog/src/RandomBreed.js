import React, {Component} from "react"
import { Route , Switch } from 'react-router-dom'
import axios from 'axios';
import { SelectBreed } from './SelectBreed'
let breeds = require('./breeds.json')

class RandomBreed extends Component {
  constructor(){
    super()
    this.state= {
      dogBreeds:breeds.message,
      breed:"african",
      dogState:[]

    }
  }
  handleChange=(event)=> {
    // debugger
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  randomByBreed =()=> {
      axios
      .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breed/${this.state.breed}/images/random/1`)
      .then(res => {
        this.setState({
          dogState:res.data.message

        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // componentDidMount=()=> {
  //   this.randomByBreed()
  // }


  render(){


    return (
      <div>
        <Switch>
          <Route exact path='/randomBreed' />
          <Route path='/randomBreed/:breed' />
        </Switch>
        This is random Breed!
        <button onClick={this.randomByBreed}>Get me a Doggo!</button>
        <br/>
          <SelectBreed
            breedsObj={this.state.dogBreeds}
            breed={this.state.breed}
            handleChange={this.handleChange}
            randomByBreed={this.randomByBreed}
            dogState={this.state.dogState}
          />

      </div>
    )
  }
}
export default RandomBreed
