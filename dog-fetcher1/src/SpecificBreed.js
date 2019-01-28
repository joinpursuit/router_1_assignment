import React from "react";
import axios from "axios";

export default class SpecificBreed extends React.Component {
  state = {
    dogs: [],
    breedList: [],
    selectedBreed: ""
  };

  getBreedList = () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
      let breedArr = Object.keys(res.data.message);
      this.setState({
        breedList: breedArr
      });
    });
  };

  componentDidMount = () => {
    this.getBreedList();
  };

  createBreedOptions = () => {
    return this.state.breedList.map((breed, i) => {
      return <option key={i}>{breed}</option>;
    });
  };

  fetchNewBreedDogSelect = e => {
    let breed = e.target.value;
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(res => {
      this.setState({
        selectedBreed: breed,
        dogs: [res.data.message]
      });
    });
  };

  fetchNewBreedDog = () => {
    let breed = this.state.selectedBreed;
    axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(res => {
      let prevDogs = this.state.dogs;
      this.setState({
        selectedBreed: breed,
        dogs: [res.data.message, ...prevDogs]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dog by Breed</h1>
        <select onChange={this.fetchNewBreedDogSelect}>
          <option disabled selected>
            Select A Breed
          </option>
          {this.createBreedOptions()}
        </select>
        {this.state.selectedBreed ? (
          <button onClick={this.fetchNewBreedDog}>
            Get Random Dog from {this.state.selectedBreed}
          </button>
        ) : null}
        <div className="imageCount">
          {this.state.dogs.map((dog, i) => (
            <div>
              <img key={i} alt="" src={dog} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
