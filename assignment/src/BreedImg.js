import React, { Component } from "react";
import axios from "axios";
import { Image } from "./Image.js";

class BreedImg extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      dogeBreedUrl: "",
      selectedBreed: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(res => {
        const dogBreeds = Object.keys(res.data.message);
        this.setState({
          breeds: dogBreeds
        });
      })
      .catch(err => {
        console.log("Error");
      });
  }

  handleChange = event => {
    this.setState({
      selectedBreed: event.target.value
    });
  };

  handleClick() {
    axios
      .get(
        `https://dog.ceo/api/breed/${this.state.selectedBreed}/images/random`
      )
      .then(res => {
        this.setState({ dogeBreedUrl: res.data.message });
      })
      .catch(err => {
        console.log("Error");
      });
  }

  render() {
    const dogeBreeds = this.state.breeds.map(breed => {
      return <option value={breed}>{breed}</option>;
    });

    return (
      <>
        <select onChange={this.handleChange}>
          <option value="pick breed">Please pick a breed</option>
          {dogeBreeds}
        </select>
        <button type="button" onClick={this.handleClick}>
          New Doge
        </button>
        <Image url={this.state.dogeBreedUrl} />
      </>
    );
  }
}

export default BreedImg;
