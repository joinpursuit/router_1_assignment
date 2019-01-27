import React, { Component } from 'react';
import { Image } from './Image';
import axios from 'axios';

class BreedImg extends Component {
  constructor() {
    super()
    this.state = {
      imgUrl: "",
      chosenBreed: "",
      breedList: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  //API handlers
  getBreedList = () => {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
        .then(res => {
          this.setState({
            breedList: Object.keys(res.data.message)
          })
        })
  }

  getBreedImg = () => {
    let { chosenBreed } = this.state;
    axios.get(`https://dog.ceo/api/breed/${chosenBreed}/images/random`)
        .then(res => {
          this.setState({
            imgUrl: res.data.message
          })
        })
  }

  componentDidMount = () => {
    this.getBreedList()
  }

  //UserInput Handlers
  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })
    this.getBreedImg()
  }

  populateBreeds = () => {
    return this.state.breedList.map( (breed,i) => {
      return <option value={breed} key={i}>{breed}</option>
    })
  }

  render() {
    let { imgUrl, breedList } = this.state;
    let { addFavImage } = this.props;

    return (
      <div>
        <h2>RETRO BREEDS</h2>
        <p>
        <select name="chosenBreed" onChange={this.handleChange}>
          <option disabled selected>--Choose a breed--</option>
          {this.populateBreeds()}
        </select>
        </p>
        <div className="images">
        {imgUrl ? <div><Image url={imgUrl} addFavImage={addFavImage}/></div> : null}
        </div>
      </div>
    )
  }
}

export default BreedImg;
