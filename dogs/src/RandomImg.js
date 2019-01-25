import React, { Component } from 'react';
import { Image } from './Image.js'
import axios from 'axios';

class RandomImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: "",
      imgUrlArr: []
    }
  }
  //get the this.props.num
  //run the function getDogImg
  getDogImg = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
          this.setState({
            imgUrl: res.data.message
          })
        })
  }

  getMultipleDogImgs = () => {
    let num = this.props.match.params.num
    console.log("NUM",num)
    axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(res => {
          this.setState({
            imgUrlArr: res.data.message
          })
        })
  }

  handleClick = () => {
    this.getDogImg()
  }

  componentDidMount() {
    this.getDogImg()
    if (this.props.match.params.num) {
      this.getMultipleDogImgs()
    }
  }

  render() {
    let { imgUrl, imgUrlArr } = this.state;
    console.log("PROPS",this.props.match.params.num)
    console.log("ARRAY",imgUrlArr)
    return (
      <div>
        <h2>Get Random Dogchik</h2>
        <button onClick={this.handleClick}>Click for anotha</button>
        <br />
        {imgUrl && !this.props.match.params.num ? <Image url={imgUrl}/> : null}
        {imgUrlArr ? imgUrlArr.map( imgUrl => {
          return <Image url={imgUrl}/>
        }) : null }
      </div>
    )
  }
}

export default RandomImg;

//make API call to dogAPI in each component,
//and have it store urls in its state.
