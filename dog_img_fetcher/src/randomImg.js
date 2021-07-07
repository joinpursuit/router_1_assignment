import React, { Component } from "react";
const axios = require("axios");
//addImageToFav

class RandomImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImg: ""
    };
    this.apiCall = this.apiCall.bind(this);
    this.handleClick = this.handleClick.bind(this)
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

handleClick(event){
this.props.addImageToFav(this.state.dogImg)

}


  render() {

    console.log(this.props);
    console.log(this.state.dogImg)

    return (
      <div className="App">
        Random Images
        <button onClick={this.apiCall}>get Random Dog</button>
        <br />
        {this.state.dogImg ?
        <img className="randomBreedImg" src={this.state.dogImg} alt=" " /> : null }
          <br />

          <button onClick={this.handleClick}>Add to Favorites</button>

      </div>
    );
  }
}

export default RandomImg;
