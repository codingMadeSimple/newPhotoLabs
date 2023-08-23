import { useState } from 'react';
import { useReducer } from 'react';



export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL"
};

//
function reducer(state, action) {
  console.log(action,"ACTION", state, "state");
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      const newArray = [...state.favorites];
      if (newArray.includes(action.payload.id)) {
        const index = newArray.indexOf(action.payload.id);
        newArray.splice(index, 1);
      }
      return { ...state, favorites: newArray };

    case ACTIONS.SET_PHOTO_DATA:
      return state;

    case ACTIONS.SET_TOPIC_DATA:
      return state;

    case ACTIONS.SELECT_PHOTO:

      return {...state, selectPhoto: action.payload.selectPhoto };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return state;

    case ACTIONS.OPEN_MODAL:

      return {...state, modalOpen:true};

    case ACTIONS.CLOSE_MODAL:

      return {...state, modalOpen:false};

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}


/* insert all relevant actions as case statements*/

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    modalOpen: false,
    selectPhoto: false,
  });


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL});
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL})
  };

  //The key is a string
  //The id is referenecing the payload from ACTION
  const addFavorite=(id)=>{
    dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: {id:id}})
  }

  const removeFavorite=(id)=>{
    dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: {id:id}})
  }

  const setSelectPhoto =(selectPhoto) =>{
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: {selectPhoto:selectPhoto}})
  }

  //Creating state object that contains the entire state of application
  // const state = {
  //   favorites,
  //   modalOpen,
  //   selectPhoto,
  // };

  //------------------------------------------

  return (
    {
      state,
      dispatch,
      openModal,
      closeModal,
      addFavorite,
      removeFavorite,
      setSelectPhoto
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