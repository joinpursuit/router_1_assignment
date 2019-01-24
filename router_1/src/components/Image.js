import React from 'react';

const Image = ({imageUrl}) => {

  return (
    <div className="center">
      <img src={imageUrl} alt="" className="center card-image"/>
    </div>
  )
}

export default Image;