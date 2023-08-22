import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList'
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import TopNavigationBar from './components/TopNavigationBar'
import HomeRoute from 'routes/HomeRoute';
import {useState} from 'react'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="App">
      <HomeRoute openModal={openModal} closeModal={closeModal} modalState={modalOpen}/>
      {modalOpen && <PhotoDetailsModal/>}
      {/* <TopNavigationBar/> */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
    </div>
  );
};
     {/* <PhotoListItem sampleData={sampleDataForPhotoListItem}/> */}
export default App;
