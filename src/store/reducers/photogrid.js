import * as actionTypes from '../actions/actionTypes';

const initialState = {
  photos: null,
  error: false
};

const reducer = ( state=initialState, action ) => {
  switch ( action.type ) {
    case ( actionTypes.SET_PHOTOS ):
      return {
        ...state, 
        photos: action.photos,
        error: false
      };
    case ( actionTypes.SET_PHOTOS_FAILED ):
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
};

export default reducer;