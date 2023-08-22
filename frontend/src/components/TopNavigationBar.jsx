import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  console.log(props)

  const checkFav = function () {
    if(props.favorites.length > 0){
      return true
    }
    else{
      return false
    }
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics}/>
      <FavBadge isFavPhotoExist={checkFav()}/>
    </div>
  )
}

export default TopNavigation;