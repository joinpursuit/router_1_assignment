import React, { Component } from 'react';
import axios from 'axios';

// props
class RandomDogCount extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomDogNum:props.match.params.count,
      dogImages: []

    }
    // this.gettingRandomNumber = this.gettingRandomNumber.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.toggle = this.toggle.bind(this)
    this.displayImages = this.displayImages.bind(this)
  }

  // gettingRandomNumber(){
  //   let {count} = this.props.match.params
  //   this.setState({
  //     randomDogNum: count
  //   })
  //   console.log(count)
  // }

apiCall(){
  let data;
  axios
  .get(`https://dog.ceo/api/breed/hound/images/random/${this.state.randomDogNum}`)
  .then(response => {
    data = response.data.message
    this.setState({
      dogImages: data
    })
  })
}

displayImages(){
return this.state.dogImages.map(doggos => {

  return(
    <>
    <img src={doggos} alt=" " />
    </>
  )
  })
}



toggle(){
  // this.gettingRandomNumber()
  this.apiCall()

}

  componentDidMount(){
    // this.gettingRandomNumber()
    this.apiCall()
      // this.apiCall()
    // debugger;
    // console.log("test")
  }





  render() {
    console.log(this.props, "the props for friday")

    return (
      <>
<p>hello </p>
<button onClick={this.toggle}>test</button>
<br />

{this.state.dogImages ?
this.displayImages(): null}
      </>
    );
  }
}

export default RandomDogCount;
// <button onClick={this.toggle}>test</button>
// props.match.params
