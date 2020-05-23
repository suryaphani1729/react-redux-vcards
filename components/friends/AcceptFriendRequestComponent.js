import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProfileCard from '../common/ProfileCard';
import {acceptFriendRequest} from '../../store/actions/friendsActions';

const AcceptFriendRequestComponent = (props) => {

 const dispatch = useDispatch();

 const {acceptRequests} = useSelector(state => state.friends);

  console.log(acceptRequests);

  const acceptBtnClick = (e, _id) => {
    e.preventDefault();
     const acceptedId = acceptRequests.find(item => item.id === _id); 
     acceptFriendRequest(dispatch, acceptedId);
  };

;return (<div><h1>FriendsList</h1>
 {
   acceptRequests && acceptRequests.map(profile => <ProfileCard key={profile.id} profile = {profile}><input type="button" value="Accept" onClick={(e)=> acceptBtnClick(e, profile.id)} /></ProfileCard>)
 }

</div>);
} 




export default AcceptFriendRequestComponent;

