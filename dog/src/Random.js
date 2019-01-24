import React, {Component} from "react"
import { Route , Switch } from 'react-router-dom'
import axios from 'axios';
import {ListDogs} from './ListDogs'
import { withRouter } from 'react-router'
import { Test } from './test'


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
  componentDidMount(){
    this.getRandom()
  }
  //
  getRandom =()=> {

    axios
    .get("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/1")
    .then(res => {
      console.log(this.props)
      this.setState({
        randomDog:res.data.message,
        loading:false
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderRandom=(props) => {
    const { num } = this.props.match.params;
    return <Test apiCall={this.testAPIcall(num)} />
  }

  testAPIcall=(aNum)=> {

    axios
    .get(`https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random/${aNum}`)
    .then(res => {
      console.log(this.props)
      this.setState({
        randomDog:res.data.message,
        loading:false
      })
    })
    .catch(err => {
      console.log(err)
    })

    return this.state.randomDog

  }
  leTest = (props) =>{
     return (<>
              <p> {props.match.params.num}</p>
            </>
            );

  }
// (props) => this.leTest(props)
  render(){



    if(this.state.loading){
      return (<>
              <h1>Barkin' on it-- i mean, Workin' on it!</h1>
              <img id="doggo" src="https://media1.tenor.com/images/75b8fbd969a79a7487560283204ac8f5/tenor.gif?itemid=4964492" alt="loading doggo"/>

              </> )
    }

    return(
      <div>
      <Switch>
          <Route exact path ='/random'/>
          <Route path='/random/:num' render={(props) => this.leTest(props)} />

      </Switch>
      <br/>
      <label>Select Number of Dog to Fetch!</label>
      <br/>
      <button onClick={this.getRandom}>Fetch!</button>
      <br/>
      <ListDogs list={this.state.randomDog}/>


      </div>
    )
  }
}
export default withRouter(Random);
