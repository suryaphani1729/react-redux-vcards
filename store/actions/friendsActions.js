import  {ACCEPT_FRIEND, GET_FRIENDS_LIST, GET_ACCEPT_LIST} from './constants';

export const acceptFriendRequest = (dispatch, friendId) => {
  dispatch({type: ACCEPT_FRIEND, payload: friendId});
}

export const getFriendsList = (dispatch) => {
  dispatch({type: GET_FRIENDS_LIST});
}

export const getAcceptList = (dispatch) => {
  dispatch({type: GET_ACCEPT_LIST});
}




