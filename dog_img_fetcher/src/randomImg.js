import React, { Component } from "react";
const axios = require("axios");

class RandomImg extends Component {
  constructor() {
    super();
    this.state = {
      dogImg: ""
    };
    this.apiCall = this.apiCall.bind(this);
  }

  apiCall() {
    let data;
    axios.get(`https://dog.ceo/api/breeds/image/random`).then(response => {
      data = response.data.message;
      this.setState({
        dogImg: data
      });
    });
  }

  render() {
    return (
      <div className="App">
        Random Images
        <button onClick={this.apiCall}>click</button>
        <br />
        {this.state.dogImg ?
        <img className="randomBreedImg" src={this.state.dogImg} alt=" " /> : null }
      </div>
    );
  }
}

export default RandomImg;
