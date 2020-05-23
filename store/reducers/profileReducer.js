import {myProfile} from '../../models/data';
import {GET_MY_PROFILE, UPDATE_MY_PROFILE} from '../actions/constants';

const initialState = myProfile;

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case GET_MY_PROFILE : return {...state};
    case UPDATE_MY_PROFILE: { console.log(action.payload);
     return {...state, ...action.payload};
    }
    default: return state;
  }

}

export default profileReducer;