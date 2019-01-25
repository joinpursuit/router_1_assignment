import React from "react";
import axios from "axios";

class DogByBreed extends React.Component {
  constructor() {
    super();
    this.state={
      breed: [],
      breedDog: ""
    }
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

  componentDidMount() {
    this.getBreedImgs()
  }

  render() {
    console.log(this.state.breed);

    return (
      <>
        <select onChange={this.getBreedImgs}>

          {this.state.breed.map(br => {
            return <option value={br}>{br}</option>
          })}

        </select>
      </>
    )
  }
}

export default DogByBreed
