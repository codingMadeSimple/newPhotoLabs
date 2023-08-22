import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react'


const HomeRoute = (props) => {
//Create state object
const [favorites, setFavorites] = useState([]);



  return (
    <div className="home-route">
      <TopNavigationBar favorites ={favorites} topics={topics}/>
      <PhotoList openModal={props.openModal} closeModal={props.closeModal} modalState={props.modalState} favorites={favorites} setFavorites={setFavorites} photos={photos} setSelectPhoto={props.setSelectPhoto}/>
      {/* Insert React */}
    </div>
  );
};

export default HomeRoute;
