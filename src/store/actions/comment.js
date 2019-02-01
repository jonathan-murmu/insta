import * as actionTypes from './actionTypes';

export const postComment = (comment) => {
    return {
      type: actionTypes.INITIATE_POST_COMMENT,
      comment: comment
    }
  }

export const postCommentFailed = () => {
    return {
        type: actionTypes.POST_COMMENT_FAILED,
    }
}

export const getComments = (id) => {
    return {
        type: actionTypes.INITIATE_GET_COMMENTS,
        id: id
    }
}

export const setComments = ( comments ) => {
    return {
        type: actionTypes.SET_COMMENTS,
        comments: comments
    }
}

export const setCommentsFailed = () => {
    return {
        type: actionTypes.SET_COMMENTS_FAILED,
    }
}