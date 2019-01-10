import * as actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    error: false,
}

const reducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case ( actionTypes.SET_PROFILE ):
            return {
                ...state,
                profile: action.profile
            };
        case ( actionTypes.SET_PROFILE_FAILED ):
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;