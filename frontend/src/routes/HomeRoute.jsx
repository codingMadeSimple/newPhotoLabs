import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigationBar favorites ={props.favorites} topics={props.topics}/>
      <PhotoList openModal={props.openModal} closeModal={props.closeModal} modalState={props.modalState} favorites={props.favorites} setFavorites={props.setFavorites} photos={props.photos} setSelectPhoto={props.setSelectPhoto}/>
      {/* Insert React */}
    </div>
  );
};

export default HomeRoute;
