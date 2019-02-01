import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getPhotosSagas } from './photogrid';
import { getProfileSagas } from './profileSummary';
import { getSinglePhotoSagas } from './singlePhoto';
import { postComment, getCommentsSagas } from './comment';

export function* watchPhotoGrid() {
  yield takeEvery(actionTypes.INITIATE_GET_PHOTOS, getPhotosSagas);
  yield takeEvery(actionTypes.INITIATE_GET_PROFILE, getProfileSagas);
  yield takeEvery(actionTypes.INITIATE_GET_SINGLE_PHOTO, getSinglePhotoSagas);
  yield takeEvery(actionTypes.INITIATE_POST_COMMENT, postComment);
  yield takeEvery(actionTypes.INITIATE_GET_COMMENTS, getCommentsSagas);
}