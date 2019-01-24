import React from 'react'
import { ListDogs } from './ListDogs'

export const SelectBreed = (props)=> {

  let {breedsObj,handleChange, breed, dogState } = props

  let options = Object.keys(breedsObj).map(aBreed => {
    return <option value={aBreed} key={aBreed}> {aBreed} </option>
  })

  return (

    <>

    <select  onChange={handleChange} name="breed" value={breed}>
      <option value="" >Choose A Breed </option>
        {options}
    </select>
<br/>
    <ListDogs list={dogState}/>


  </>
  )
}
