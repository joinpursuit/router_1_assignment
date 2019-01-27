import React from 'react'
// import { ListDogs } from './ListDogs'
//yo i need you to make an api call, then with that api call youre going to list those dogs and show them to me. ok...ok
export const RandomRender = props => {
  // console.log(props.handleChange)
  let option =[]
 for( let i=0; i<=5; i++){
   option.push(<option value={i} key={i}> {i} </option>)
 }


  return (
    <>
    <select name="dogNum" value={props.dogNum} onChange={props.handleChange}>
       {option}
    </select>


    </>
 )


}
