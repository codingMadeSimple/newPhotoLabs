import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    //Sets the state of the click
    const [click, setClick] = useState(false);
    
    console.log(props.id,"props ID ----------------")
    const handleClick=function(){
      //This will change the previous value of state and set it to the opposite value

      // console.log("is this props", props)

      if(!props.favorites.includes(props.id)){
        props.addFavorite(props.id);
      } else {
        props.removeFavorite(props.id);
      }
    }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favorites.includes(props.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
