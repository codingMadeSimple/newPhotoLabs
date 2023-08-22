import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  // console.log(props)

  // const isFavorited={

  // }
const modalToggle = function(){
  if(!props.modalState){
    props.openModal()
  }
  else{
    props.closeModal()
  }
}


console.log(props)

  return(
<div className="photo-list__item">
  <PhotoFavButton id={props.id} favorites={props.favorites} setFavorites={props.setFavorites}/>
  <img className="photo-list__image" src={props.imgURL} onClick={modalToggle}/>
  <div className="photo-list__user-details">
  <img className="photo-list__user-profile" src={props.userImgURL}/>
  <div>{props.userName}</div>
  <div>{props.userCityLocation}, { }
  {props.userCountryLocation}</div>
  </div>
</div>
)};

export default PhotoListItem;

PhotoListItem.defaultProps ={

}