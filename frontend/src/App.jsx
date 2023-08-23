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
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';




// Note: Rendering a single component to build components in isolation
const App = () => {

  // Create state object
// const [favorites, setFavorites] = useState([]);


//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const [selectPhoto, setSelectPhoto] = useState(false);

  const {
    state, 
    setFavorites, 
    setSelectPhoto, 
    closeModal,
    openModal
  } = useApplicationData()
  
  const {    
    favorites,
    modalOpen,
    selectPhoto,} = state;

  return (
    <div className="App">
      <HomeRoute favorites={favorites} setFavorites={setFavorites} openModal={openModal} closeModal={closeModal} modalState={modalOpen} setSelectPhoto={setSelectPhoto} photos={photos} topics={topics}/>
      {modalOpen && <PhotoDetailsModal favorites={favorites} setFavorites={setFavorites} closeModal={closeModal} selectPhoto={selectPhoto} setSelectPhoto={setSelectPhoto} photos={photos}/>}
    </div>
  );
};
     {/* <PhotoListItem sampleData={sampleDataForPhotoListItem}/> */}
export default App;
