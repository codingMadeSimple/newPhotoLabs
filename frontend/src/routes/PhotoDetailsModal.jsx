import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import FavBadge from 'components/FavBadge';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {

  // console.log(props.selectPhoto)
  const photos = Object.values(props.selectPhoto.similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton id={props.selectPhoto.id} favorites={props.favorites} addFavorite={props.addFavorite} removeFavorite={props.removeFavorite}/>
      <img src={props.selectPhoto.urls.full} className ="photo-details-modal__image"/>
      <PhotoList className ="photo-details-modal__images" photos={photos} favorites={props.favorites} addFavorite={props.addFavorite} removeFavorite={props.removeFavorite}/>
    </div>
  )
};
//p

export default PhotoDetailsModal;
