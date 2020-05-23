import {friendsList, acceptRequests} from '../../models/data';
import {ACCEPT_FRIEND, GET_FRIENDS_LIST, GET_ACCEPT_LIST} from '../actions/constants';


const initialState = {friendsList, acceptRequests};

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACCEPT_FRIEND :
          const {acceptRequests} = state;
          const newFriend = acceptRequests.filter((item)=> item.id === action.payload.id); 

          const newAcceptRequests =  acceptRequests.filter((item)=> item.id != action.payload.id); 

          return {...state, friendsList: [...state.friendsList,...newFriend], acceptRequests: [...newAcceptRequests]} ;

    case GET_FRIENDS_LIST:
          return [...state.friendsList];
    case GET_ACCEPT_LIST: return [...state.acceptRequests];
    default: return state;
  }

}

export default friendsReducer;