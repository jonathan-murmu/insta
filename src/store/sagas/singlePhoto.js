import { put } from 'redux-saga/effects';

import axios from '../../axios_pics';
import * as actions from '../actions';

export function* getSinglePhotoSagas(action) {
    try {
        const response = yield axios.get(`https://insta-7bcc9.firebaseio.com/photos/${action.id}.json`);
        yield put(actions.setSinglePhoto(response.data));
    } catch (error) {
        yield put(actions.setSinglePhotoFailed());
    }
}