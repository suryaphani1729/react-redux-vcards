import React from 'react';
import {connect} from 'react-redux';
import ProfileCard from '../common/ProfileCard';
import {getMyProfile} from '../../store/actions/profileActions';

const Profile = (props) => {
 const {profile} = props;
return (<div><h1>Profile</h1>
<ProfileCard profile = {profile} />
</div>);
} 

const mapStateToProps = (state, props) => {
  return {profile : state.profile};
}

const mapDispatchToProps = (dispatch) => {
  return {getMyProfile: getMyProfile};
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

