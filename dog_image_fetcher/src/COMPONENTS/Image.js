import React from 'react'

const Image = (props) => {
  let { imgUrl } = props;
  return (
    <img alt='' src={imgUrl} className='img'>
    </img>
  )
}

export default Image
