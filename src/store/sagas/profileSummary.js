import { put } from 'redux-saga/effects';

import axios from '../../axios_pics';
import * as actions from '../actions';

export function* getProfileSagas (action) {
    try {
        const response = yield axios.get('https://insta-7bcc9.firebaseio.com/users/0.json');
        yield put(actions.setProfile(response.data))
    } catch (error) {
        yield put(actions.setProfileFailed());
    }
}