import * as actionTypes from '../actions/actionTypes';

const initialState = {
    comments: null,
    error: false,
}

const reducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case ( actionTypes.SET_COMMENTS ):
            return {
                ...state,
                comments: action.comments
            };
        case ( actionTypes.SET_COMMENTS_FAILED ):
            return {
                ...state,
                error: true
            };
        case ( actionTypes.SET_SINGLE_COMMENT ):
            let comment = {}
            comment[action.commentId] = action.commentData;
            let comments = {
                ...state.comments,
                ...comment
            }
            return {
                ...state,
                comments: comments
            }
        default:
            return state;
    }
}

export default reducer;