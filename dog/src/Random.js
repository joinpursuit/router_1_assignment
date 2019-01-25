import React, {Component} from "react"
import {Route, Switch } from 'react-router-dom'
import axios from 'axios';
import {ListDogs} from './ListDogs'
// import { withRouter } from 'react-router'
// import {RandomRender} from './RandomRender'
import RandomNum from './RandomNum'



class Random extends Component {
  constructor (props){
    super(props)
    this.state= {
      randomDog:[],
      loading:true,
      dogNum:1
    }
  }
    // debugger
    //this.props.match.params.num



  handleChange=(event)=> {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  //
  componentDidMount(props){
    // this.getRandom()

  }

  getRandom =()=> {

    axios
    .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${this.state.dogNum}`)
    .then(res => {
      console.log('asf')
      this.setState({
        randomDog:res.data.message,
        loading:false
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  testAPIcall=()=> {
    console.log("PROPS", this.props)
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${this.props.match.params.num}`)
    .then(res => {
      this.setState({
        randomDog:res.data.message,
        loading:false
      })
    })
    .catch(err => {
      console.log(err)
    })

  }


// this and (props) => this.leTest(props) work to get props to show
  // leTest = (props) =>{
  //    return (<>
  //             <p> {props.match.params.num}</p>
  //           </>
  //           );
  //
  // }
// (props) => this.leTest(props)
  render(){

    return(
      <div>


      <br/>
      <button onClick={this.getRandom}>Fetch!</button>
      <br/>
      <ListDogs list={this.state.randomDog}/>


      </div>
    )
  }
}
export default Random;
