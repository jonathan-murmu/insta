import * as actionTypes from './actionTypes';
import axios from '../../axios_pics';


export const setPhotos = ( photos ) => {
  return {
    type: actionTypes.SET_PHOTOS,
    photos: photos
  };
};

export const setPhotosFailed = () => {
  return {
    type: actionTypes.SET_PHOTOS_FAILED
  }
}

// // redux thunk
// export const getPhotos = () => {
//   return dispatch => {
//     axios.get('https://insta-7bcc9.firebaseio.com/photos.json')
//         .then( response => {
//           dispatch(setPhotos(response.data));
//         })
//         .catch( error => {
//           dispatch(setPhotosFailed());
//         });
//    };
// };

// redux sagas implementation
export const getPhotos = () => {
  return {
    type: actionTypes.INITIATE_GET_PHOTOS
  }
}