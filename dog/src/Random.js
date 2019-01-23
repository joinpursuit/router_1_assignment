import React, {Component} from "react"
import axios from 'axios';
import { withRouter } from 'react-router'
import {ListDogs} from './ListDogs'

class Random extends Component {
  constructor (){
    super()
    this.state= {
      randomDog:[],
      loading:true,
      dogNum:1
    }
  }
  getRandom =()=> {
    // debugger
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${this.props.match.params.num}`)
    .then(res => {
      console.log(this.props.match.params.num)
      this.setState({
        randomDog:res.data.message,
        loading:false
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleChange=(event)=> {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  componentDidMount(){
    this.getRandom()
  }


  render(){
    console.log(this.state.dog)
    if(this.state.loading){
      return <img id="doggo" src="https://media1.tenor.com/images/75b8fbd969a79a7487560283204ac8f5/tenor.gif?itemid=4964492" alt="loading doggo"/>
    }

    return(
      <>
      <label>Select Number of Dog to Fetch!</label>
      <button onClick={this.getRandom}>Fetch!</button>
      <ListDogs list={this.state.randomDog}/>

      </>
    )
  }
}
export default withRouter(Random);
