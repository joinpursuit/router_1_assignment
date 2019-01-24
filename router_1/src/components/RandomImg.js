import React from 'react';
import axios from 'axios';
import Image from './Image';


class RandomImg extends React.Component {
  constructor () {
    super ();
    this.state = {
      imageUrl: ''
    }
  }

  handleRandomOne = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        let imageUrl = res.data.message;
        this.setState({
          imageUrl: imageUrl
        })
      }).catch(err => console.log(err))
  }

  render () {
    console.log(this.state)
    return (
      <div className="center">
        <button onClick={this.handleRandomOne}>Click for a random dog image</button><br /><hr />
        <Image imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

export default RandomImg;