import React from "react";
import axios from "axios";
import { Image } from "./Image";

export default class RandDog extends React.Component {
  state = {
    dogs: []
  };

  fetchDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
      this.setState({
        dogs: [res.data.message]
      });
    });
  };

  componentDidMount() {
    this.fetchDog();
  }

  getNewDog = () => {
    this.fetchDog();
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.getNewDog}>Get New Dog</button>
        <h1>Random Dog</h1>
        {this.state.dogs.map((d, i) => (
          <Image key={i} dog={d} />
        ))}
      </div>
    );
  }
}
