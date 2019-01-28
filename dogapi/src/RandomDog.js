import React from "react";
import axios from "axios";

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state={
      dog: []
    }
  }

  getDogImg = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      this.setState({
        dog: res.data.message
      })
    })
    .catch(err => {
      console.log("error")
    })
  }

  componentDidMount() {
    this.getDogImg()
  }

  render() {
    return (
      <div>
        <button onClick={this.getDogImg}>check out this dog</button>
        <img alt="" src={this.state.dog} />
      </div>
    )
  }
}

export default RandomDog


// import React from 'react';
//
// export const RandomDog = (props) => {
//   console.log('PROPSS',props)
//   return (
//     <>
//       <h1> Your Dogs </h1>
//       {props.randomDog.map((d, i) => (
//         <RandomDog key={i} dog={d} />
//       ))}
//       <button onClick={props.getNewDog}> one more </button>
//       <img alt="" src={props.newDogImg} />
//     </>
//   )
// }
//
//
// return (
//       <div className="App">
//         <h1>Dog Test</h1>
//         {this.state.dogs.map((d, i) => (
//           <Dog key={i} dog={d} />
//         ))}
//         <button onClick={this.getNewDog}>Get New Dog</button>
//       </div>
//     );
//   }
