import React from 'react';
import axios from 'axios';
import Image from './Image';

class BreedImg extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      imageUrl: null,
      breedSelected: null
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      let breeds = Object.keys(res.data.message);
      this.setState({
        breeds: breeds
      })
    }).catch(err => console.log('error'))
  }

  handleChange = breed => {
    axios(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => {
        console.log(res.data)
        // this.setState({
    
        // })
      })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const {breeds} = this.state;
    const breedList = breeds.map(breed => {
      return (
        <option value={breed} key={breed}>{breed}</option>
      ) 
    })

    return (
      <>
        <select>
          {breedList}
        </select>
        <Image imageUrl={this.state.imageUrl}/>
      </>
    )

    // return (
    //   <div className="container center">
    //     <form className="center" onSubmit={this.handleSubmit}>
    //       <label className="blue-text">
    //         Pick a breed to show a random picture:
    //         <select className="center" onChange={this.handleChange}>
    //           {breedList}
    //         </select>
    //       </label>
    //       <button type='submit'>Submit</button>
    //     </form><br /> <hr />
    //     <Image imageUrl={this.state.imageUrl}/>
    //   </div>
    // )
  }
}


export default BreedImg;