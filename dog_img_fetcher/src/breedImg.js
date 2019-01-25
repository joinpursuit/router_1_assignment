import React, { Component } from "react";
const axios = require("axios");

class BreedImg extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      userInput: "",
      randomBreedImage:""
    };
    this.apiCallBreedsInitial = this.apiCallBreedsInitial.bind(this);
    this.displayBreeds = this.displayBreeds.bind(this);
    this.apiCallBreedsAfterSelect = this.apiCallBreedsAfterSelect.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  apiCallBreedsInitial() {
    let data;
    let breedData;
    axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
      data = response.data.message;
      breedData = Object.keys(data);
      this.setState({
        breeds: breedData
      });
    });
  }

//for the select box after selecting, to get specific breed.
  apiCallBreedsAfterSelect() {
    let data;
    axios
      .get(`https://dog.ceo/api/breed/${this.state.userInput}/images/random`)
      .then(response => {
        data = response.data.message;
        console.log(data , "after select");
        this.setState({
          randomBreedImage: data
        })

      });

  }

  componentDidMount() {
    this.apiCallBreedsInitial();
    this.apiCallBreedsAfterSelect();
  }
  displayBreeds() {
    let breedStart = this.state.breeds;
    return breedStart.map(breed => {
      return (
        <option onClick={this.handleChange} name="userInput" key={breed}>
          {breed}
        </option>
      );
    });
  }
  //
  // displayImage = () => {
  //   return(
  //     <>
  //     <img className=""src={this.state.randomBreedImage} alt=" " />
  //     </>
  //   )
  //
  // }
  render() {
    console.log(this.state.userInput,"this");
    // console.log(this.state.userInput, "the selection")
    // // console.log(this.state.breeds, "this");
    // console.log(this.state.userInput, "this")
    return (
      <div className="App">
        Breed images
        <select onChange={this.handleChange} name="userInput" >{this.displayBreeds()}</select>
        <button onClick={() => this.apiCallBreedsAfterSelect()}>Confirm Click</button>
        <br />

        {this.state.randomBreedImage ?
          <img className="randomBreedImg" src={this.state.randomBreedImage} alt =" "/> : null}






      </div>
    );
  }
}

export default BreedImg;

// <button onClick={this.apiCallBreeds}>testClick</button>
