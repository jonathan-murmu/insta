import { put } from 'redux-saga/effects';

import axios from '../../axios_pics';
import * as actions from '../actions';

export function* postComment(action) {
    try {
        yield console.log(action.comment.comment)
        const response = yield axios.post(
            `https://insta-7bcc9.firebaseio.com/photos/${action.comment.photoId}/comments.json`,
            action.comment
        );
        yield console.log('posted....');
        yield console.log(response.data);
        // todo: now update the redux state with the newly posted comment
        // yield put(actions.setSinglePhoto(response.data));
    } catch (error) {
        yield put(actions.setSinglePhotoFailed());
    }
}

export function* getCommentsSagas(action) {
    try {
        const response = yield axios.get(
            `https://insta-7bcc9.firebaseio.com/photos/${action.id}/comments.json`,
        );
        yield put(actions.setComments(response.data));
    } catch (error) {
        yield put(actions.setCommentsFailed());
    }
}