import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
    //Sets the state of the click
    const [click, setClick] = useState(false);
    
    

    const handleClick=function(){
      //This will change the previous value of state and set it to the opposite value
      props.setFavorites((prev)=>{
        const newArray = [...prev]
        if(newArray.includes(props.id)){
          const index = newArray.indexOf(props.id)
          newArray.splice(index, 1)
        }else{
          newArray.push(props.id)
        }
        return newArray
      })

    }
    console.log(props.id,"----------------")
  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favorites.includes(props.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
