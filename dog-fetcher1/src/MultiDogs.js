import React from "react";
import axios from "axios";

export default class MultiDogs extends React.Component {
  state = {
    allDogs: []
  };

  dogCountHandler = e => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${e.target.value}`)
      .then(res => {
        this.setState({
          allDogs: res.data.message
        });
      });
  };

  populateSelect = () => {
    let a = [];
    for (let i = 1; i <= 10; i++) {
      a.push(<option> {i} </option>);
    }
    return a;
  };

  render() {
    const { allDogs } = this.state;
    return (
      <div className="App">
        <select onChange={this.dogCountHandler}>
          <option disabled selected>
            Select Count
          </option>
          {this.populateSelect()}
        </select>
        <div className="imageCount">
          {allDogs.map((dog, i) => (
            <div>
              <img key={i} alt="" src={dog} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
