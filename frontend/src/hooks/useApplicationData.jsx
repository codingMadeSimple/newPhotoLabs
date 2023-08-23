import {useState} from 'react'

export default function useApplicationData() {

  const [favorites, setFavorites] = useState([]);


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [selectPhoto, setSelectPhoto] = useState(false);

  //Creating state object that contains the entire state of application
  const state={
    favorites,
    modalOpen,
    selectPhoto,
  }

  return (
    {
      state,
      setFavorites,
      setSelectPhoto,
      closeModal,
      openModal, 

    }
  );
}

// const {
//   state,
//   onPhotoSelect,
//   updateToFavPhotoIds,
//   onLoadTopic,
//   onClosePhotoDetailsModal,
// } = useApplicationData();