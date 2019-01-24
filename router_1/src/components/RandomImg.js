import React from 'react';
import axios from 'axios';
import Image from './Image';


class RandomImg extends React.Component {
  constructor () {
    super ();
    this.state = {
      images: '',
      num: null
    }
  }

  componentDidMount = () => {
    let num = this.props.match.params.num;
    if (num) {
      axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(res =>{
        this.setState({
          images: res.data.message,
          num: num
        })
      })
    }
  }

  handleRandom = () => {
    if (!this.state.num) {
      axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        this.setState({
          images: res.data.message
        })
      }).catch(err => console.log(err))
    }
  }

  render () {
    if ( !this.state.num ) {
      return (
  
        <div className="center">
          <button onClick={this.handleRandom}
          >Get a random dog image
          </button><br /><hr />
          <Image images={this.state.images} num={this.state.num}/>
        </div>
      )
    } else {
      return (
        <div className="center">
          <Image images={this.state.images} num={this.state.num}/>
        </div>
      )
    }
  }
}

export default RandomImg;