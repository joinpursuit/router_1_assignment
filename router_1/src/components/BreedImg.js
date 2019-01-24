import React from 'react';
import axios from 'axios';
import Image from './Image';

class BreedImg extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      imageUrl: '',
      breedSelected: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      let breeds = Object.keys(res.data.message).slice(0,20);
      this.setState({
        breeds: breeds,
        isLoading: false
      })
    }).catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    axios.get(`https://dog.ceo/api/breed/${this.state.breedSelected}/images/random`)
    .then(res => {
      this.setState({
        imageUrl: res.data.message
      })
    }).catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    const {breeds, breedSelected, isLoading} = this.state;
    
    console.log(breeds)
    
    return (
      <>
        { !isLoading &&
          <div className="container">
            <label className="blue-text">Select a breed:</label><br /><br />
            <select 
              value={breedSelected} 
              name ='breedSelected' 
              onChange={this.handleChange}
            >
              {breeds.map(breed => <option key={breed} value={breed}>{breed}</option>)}
            </select>
            
            <button onClick={this.handleSubmit}>Submit</button>
            <br /> <hr />
            <Image imageUrl={this.state.imageUrl}/>
          </div>
        }
      </>
    )
  }
}


export default BreedImg;