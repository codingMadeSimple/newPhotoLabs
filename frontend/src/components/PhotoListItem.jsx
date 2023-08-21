import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log(props)
  return(
<div className="photo-list__item">
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