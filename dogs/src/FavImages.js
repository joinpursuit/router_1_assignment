import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';

export const FavImages = (props) => {
  console.log(props,"FAVIMAGES")
  let favArray = props.favArray
  let isId = props.match.params.id
  let singleFavDog = null;
  if (isId) {
    singleFavDog = favArray.find(dog => {
      return (dog.id === isId)
    })
  }
  console.log(isId)
  //use the id as params later
  return (
    <>
      <h2>Your Fav Doggies</h2>
      {isId
        ? <div className="images">
            <div>
              <Image url={singleFavDog.url} key={singleFavDog.id}/>
            </div>
          </div>
        : <div className="thumbnails">
        {favArray.map(dog => {
        return (<div>
                  <Link to={`/favorites/${dog.id}`}>
                    <Image url={dog.url} key={dog.id}/>
                  </Link>
                </div>)
              })}
          </div>
        }
    </>
  )
  //renders a list of all fav imgs.
  //links to specific /favorites/:id, renders single <Image/>.
}
