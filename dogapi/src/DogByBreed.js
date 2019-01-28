import React from "react";
import axios from "axios";

class DogByBreed extends React.Component {
  constructor() {
    super();
    this.state={
      breed: [],
      breedUrl: [],
      breedImg: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      breedUrl: event.target.value
    })
  }

  getBreedImgs = () => {
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
      this.setState({
        breed: Object.keys(res.data.message)
      })
    })
      .catch(err => {
        console.log("err");
      })
    }

    displayBreedImgs = () => {
      axios.get(`https://dog.ceo/api/breed/${this.state.breedUrl}/images/random`)
      .then(res => {
        this.setState({
          breedImg: res.data.message
        })
      })
      .catch(err => {
        console.log("error");
      })
    }



  componentDidMount() {
    this.getBreedImgs()
  }

  render() {
    console.log(this.state.breedUrl);

    return (
      <>
        <select onChange={this.handleChange}>

          {this.state.breed.map((br, i) => {
            return <option key={i} value={br}>{br}</option>
          })}

        </select>
        <button onClick={this.displayBreedImgs}>get breeds</button>
        <img alt="" src={this.state.breedImg} />
      </>
    )
  }
}

export default DogByBreed
