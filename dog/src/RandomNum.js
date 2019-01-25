import React, {Component} from 'react'
import {ListDogs} from './ListDogs'
// import {RandomRender} from './RandomRender'
import axios from 'axios'

class RandomNum extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomDog:[],
      dogNum:1
    }
  }
  componentDidMount(){
    this.getByNum()
  }
  getByNum =()=> {
    const num = this.props.match.params.num
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${num}`)
    .then(res => {
      this.setState({
        randomDog:res.data.message
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleChange= (e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  render(){
    return(<>

    <br/>
    <ListDogs list={this.state.randomDog} />

    </>
    )
  }
}

export default RandomNum
