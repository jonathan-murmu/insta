import * as actionTypes from './actionTypes';

export const getProfile = () => {
    return {
      type: actionTypes.INITIATE_GET_PROFILE
    }
  }

export const setProfile = ( profile ) => {
    return {
        type: actionTypes.SET_PROFILE,
        profile: profile
    }
}

export const setProfileFailed = () => {
    return {
        type: actionTypes.SET_PROFILE_FAILED
    }
}