import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList'
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import TopNavigationBar from './components/TopNavigationBar'
// Note: Rendering a single component to build components in isolation
const App = () => {
  

  return (
    <div className="App">
      <TopNavigationBar/>
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
    </div>
  );
};
     {/* <PhotoListItem sampleData={sampleDataForPhotoListItem}/> */}
export default App;
