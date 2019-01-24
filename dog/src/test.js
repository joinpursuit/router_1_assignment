import React from "react";

export const Test = (props) => {
 let thing = props.testAPIcall

 let listOfThings=thing.map(dog=> {
   return <img src={dog} alt="dog"/>
 })
  return (
    <>
    {listOfThings}
    </>
  )
}
