import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
    //Sets the state of the click
    const [click, setClick] = useState(false);

    const handleClick=function(){
    
      //This will change the previous value of state and set it to the opposite value
      setClick((prev)=>{
        return !prev
      })
     
    }
    
  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={click} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
