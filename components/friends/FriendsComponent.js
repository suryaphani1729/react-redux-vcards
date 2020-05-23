import React from 'react';
import {useSelector} from 'react-redux';
import ProfileCard from '../common/ProfileCard';

const FriendsComponent = (props) => {

 const {friendsList} = useSelector(state => state.friends);

return (<div><h1>FriendsList</h1>
 {
   friendsList && friendsList.map(profile => <ProfileCard key={profile.id} profile = {profile} />)
 }

</div>);
} 




export default FriendsComponent;

