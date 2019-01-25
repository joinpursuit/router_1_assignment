import React from 'react';
import axios from "axios"

class MultiDog extends React.Component {
  constructor() {
    super();
    this.state={
      multidog: []
    }
  }

  getMultipleDog = (amount) => {
    axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(res => {
      this.setState({
        multidog: res.data.message
      })
    })
    .catch(err => {
      console.log("err");
    })
  }

  componentDidMount() {
    this.getMultipleDog(this.props.match.params.id);

  }

  render() {
    const dogs = this.state.multidog.map((url, i) => {
      return <img alt="" src={url} key={i} />
    })
    return (
      <>
        <h1>multi dog</h1>
        {dogs}
      </>
    )
  }
}

export default MultiDog
