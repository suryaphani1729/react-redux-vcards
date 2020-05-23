import  {GET_MY_PROFILE, UPDATE_MY_PROFILE} from './constants';

export const getMyProfile = dispatch => {
  dispatch({type: GET_MY_PROFILE});
}

export const updateMyProfile = (dispatch, updatedProfile) => {
  dispatch({type: UPDATE_MY_PROFILE, payload: updatedProfile});
}