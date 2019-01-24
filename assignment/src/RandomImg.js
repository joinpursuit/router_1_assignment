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
    this.newDoge = this.newDoge.bind(this);
    this.newDoges = this.newDoges.bind(this);
  }

  // this.props.match.params
  // ^ this is the key to differentiating between http://localhost:3000/random and http://localhost:3000/random/:id!!!

  componentDidMount() {
    "num" in this.props.match.params ? this.newDoges() : this.newDoge();
  }

  newDoge() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        this.setState({
          doge: res.data.message
        });
        console.log(this.state.doge);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  newDoges() {
    axios
      .get(
        `https://dog.ceo/api/breeds/image/random/${+this.props.match.params
          .num}`
      )
      .then(res => {
        this.setState({ doges: res.data.message });
        console.log(this.state.doges);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  // handleChange() {
  //   this.newDoges();
  //   const doges = this.state.doges.map(doges => {
  //     return <Image url={doges} />;
  //   });
  //   this.returnDoges();
  // }

  // returnDoges() {
  //   return <>{doges}</>;
  // }

  determineRenderComponents() {
    const doges = this.state.doges.map(doges => {
      return <Image url={doges} />;
    });
    if ("num" in this.props.match.params) {
      return <>{doges}</>;
    } else {
      return (
        <>
          <button type="button" onClick={this.newDoge}>
            New Doge
          </button>
          <select onChange={this.handleChange}>
            <option value=""># of dogs</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
