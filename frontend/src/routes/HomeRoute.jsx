import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList/>
      {/* Insert React */}
    </div>
  );
};

export default HomeRoute;
