import React from 'react';

const Image = ({images, num}) => {
  if (!num) {
    return (
      <div className="center">
        <img src={images} alt="" className="center card-image"/>
      </div>
    )
  } else {
    let imageList = images.map(image => {
      return <img src={image} alt='' className='center card-image'/>
    })
    return (
      <div className="center">
        {imageList}
      </div>
    )
  }
}

export default Image;