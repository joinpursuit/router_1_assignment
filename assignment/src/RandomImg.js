import React, { Component } from "react";
import axios from "axios";
import { Image } from "./Image.js";

class RandomImg extends Component {
  constructor() {
    super();
    this.state = {
      doge: "",
      doges: []
    };
    this.clickButton = this.clickButton.bind(this);
  }

  // this.props.match.params
  // ^ this is the key to differentiating between http://localhost:3000/random and http://localhost:3000/random/:id!!!

  componentDidMount() {
    // if ("num" in this.props.match.params) {
    //   this.newDoges();
    // } else {
    //   this.newDoge();
    // }
    "num" in this.props.match.params ? this.newDoges() : this.newDoge();
  }

  newDoge() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        this.setState({
          doge: res.data.message
        });
      })
      .catch(err => {
        console.log("Error");
      });
  }

  newDoges() {
    console.log("Success");
    console.log(Object.values(this.props.match.params).toString());
    axios
      .get(
        `https://dog.ceo/api/breeds/image/random/${Object.values(
          this.props.match.params
        ).toString()}`
      )
      .then(res => {
        this.setState({ doges: res.data.message });
        console.log(this.state.doges);
      })
      .catch(err => {
        console.log("Error");
      });
  }

  clickButton() {
    this.newDoge();
  }

  determineRenderComponents() {
    const doges = this.state.doges.map(doges => {
      return <Image url={doges} />;
    });
    if ("num" in this.props.match.params) {
      return <>{doges}</>;
    } else {
      return (
        <>
          <button type="button" onClick={this.clickButton}>
            New Doge
          </button>
          <Image url={this.state.doge} />
        </>
      );
    }
  }

  render() {
    return this.determineRenderComponents();
  }
}

export default RandomImg;
