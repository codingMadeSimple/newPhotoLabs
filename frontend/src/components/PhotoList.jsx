import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];


const PhotoList = (props) => {
 //The below was used for hardcoded example data
  // const photos = new Array(3)
  // const photos = sampleDataForPhotoList

  
  const PhotoArray = props.photos.map((photo, index)=>{
    return <PhotoListItem 
    key={index} 
    id={photo.id}
    imgURL={photo.urls.regular}
    userImgURL={photo.user.profile}
    userName={photo.user.username}
    userCityLocation={photo.location.city}
    userCountryLocation={photo.location.country}
    favorites={props.favorites}
    setFavorites={props.setFavorites}
    />
  })


  return (
    <ul className="photo-list">
      {PhotoArray}
    </ul>
  );
};

export default PhotoList;

PhotoList.defaultProps ={
  
}