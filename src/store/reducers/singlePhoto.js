import * as actionTypes from '../actions/actionTypes';

const initialState = {
    photo: null,
    error: false,
}

const reducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case ( actionTypes.SET_SINGLE_PHOTO ):
            return {
                ...state,
                photo: action.singlePhoto
            };
        case ( actionTypes.SET_SINGLE_PHOTO_FAILED ):
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;