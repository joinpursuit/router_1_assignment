import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import BreedImg from './components/BreedImg';
import RandomImg from './components/RandomImg';
import {withRouter} from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dog: null,
      showing: false
    }
  }

  componentDidMount () {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      this.setState({
        dog: res.data,
        loading: false,
      })
    })
  }

  render() {

    if(this.state.loading) {
      return <>LOADING!!!</>
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar /><br />
          <div>
            <Route exact path='/random' component={RandomImg} />
            <Route exact path='/random/:num' component={RandomImg} />
            <Route path='/randomBreed' component={BreedImg} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default withRouter(App);
