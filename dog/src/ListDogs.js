import React from 'react';
import './App.css'
export const ListDogs = (props)=> {


let showDogs = props.list.map((dog, i) => {
  return (
    // console.log(dog)
    <img id="doggo" src={dog} alt="doggo" key={i}/>
  )
})
return (
<>
{showDogs}
</>
)

}
