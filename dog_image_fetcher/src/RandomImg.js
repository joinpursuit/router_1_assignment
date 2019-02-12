import React, { Component } from 'react'
import axios from 'axios'

import Image from './COMPONENTS/Image'

class RandomImg extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: ''
    }
  }

  getRandomImage = () => {
    axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log('res: ',res, 'img:', res.data.message);
      this.setState({imgUrl: res.data.message})
    })
  }

  componentDidMount() {
    this.getRandomImage();
  }

  render() {
    let {imgUrl} = this.state;

    return(
      <div id='buttonAndImageTagsDiv'>
        <button onClick={this.getRandomImage}>Another one!</button>
        <Image imgUrl={imgUrl}/>
      </div>
    )
  }

}

export default RandomImg
