import * as actionTypes from './actionTypes';

export const getSinglePhoto = (id) => {
    return {
      type: actionTypes.INITIATE_GET_SINGLE_PHOTO,
      id: id
    }
  }

export const setSinglePhoto = ( singlePhoto ) => {
    return {
        type: actionTypes.SET_SINGLE_PHOTO,
        singlePhoto: singlePhoto
    }
}

export const setSinglePhotoFailed = () => {
    return {
        type: actionTypes.SET_SINGLE_PHOTO_FAILED
    }
}