import React from 'react'

const FavImages = (props) => {
  console.log(props.favImages,"this is the favImg props")

  let displayFavImages = props.favImages.map((img, i) => {

    return(
      <div>
      hello world
      <p></p>
      <img key={i} src={img} alt=" "/>
      </div>
    )
  })
return(
  <>
  {displayFavImages}
  </>
)
}


export default FavImages

//
// Let's create a component, FavImages, that will render a list of all of our favorite images. These should be thumbnails - that is, very small versions of the images - in a grid. When you click on an image, it should take you to the route /favorites/:id, which renders the full image in an Image component.
//
// All of the components we're creating today, it's worth noting, are functional components - they don't actually hold any state. By adding a single part of state to our App component, we are expanging the functionality of our site significantly.


//will have to be a link, if you click the search bar, it will refresh the page and you will lose
//all the content on this.state. has to be a link on all the routes, even on the id one. has to be
//link  of the image that needs to be done.
