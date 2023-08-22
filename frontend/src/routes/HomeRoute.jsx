import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react'


const HomeRoute = () => {
//Create state object
const [favorites, setFavorites] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar favorites ={favorites} topics={topics}/>
      <PhotoList favorites={favorites} setFavorites={setFavorites} photos={photos}/>
      {/* Insert React */}
    </div>
  );
};

export default HomeRoute;
