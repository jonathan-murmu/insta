import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getPhotosSagas } from './photogrid';
import { getProfileSagas } from './profileSummary';

export function* watchPhotoGrid() {
  yield takeEvery(actionTypes.INITIATE_GET_PHOTOS, getPhotosSagas);
  yield takeEvery(actionTypes.INITIATE_GET_PROFILE, getProfileSagas);
}