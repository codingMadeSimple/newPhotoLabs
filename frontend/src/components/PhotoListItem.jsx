import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  console.log(props)
  return(
<div className="photo-list__item">
  <PhotoFavButton/>
  <img className="photo-list__image" src={props.imgURL}/>
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