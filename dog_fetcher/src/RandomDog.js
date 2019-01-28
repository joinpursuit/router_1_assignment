import React, { Component } from 'react'
import axios from 'axios'
import Image from './Image.js'

class RandomDog extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: ''
    };
  }

  componentDidMount() {
    this.getRandomImg();
  }

  getRandomImg = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({
          imgUrl: response.data.message
        });
      });
  }


  render(){
    const { imgUrl } = this.state
    if(!imgUrl) {
      return <h1>Loading ... </h1>
    } else {
      return (
        <>
        <button className='img_button' onClick={this.getRandomImg}>New Image</button>
        <Image imgUrl={imgUrl} />
        </>
      )
    }
  }
}


export default RandomDog
