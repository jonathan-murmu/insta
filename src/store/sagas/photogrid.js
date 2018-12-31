import { put } from 'redux-saga/effects';
import axios from '../../axios_pics';
import * as actions from '../actions';


export function* getPhotosSagas (action) {
  try {
    const response = yield axios.get('https://insta-7bcc9.firebaseio.com/photos.json');
    yield put(actions.setPhotos(response.data));
  } catch (error) {
    yield put(actions.setPhotosFailed());
  }
}
