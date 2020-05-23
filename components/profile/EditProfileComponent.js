import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateMyProfile} from '../../store/actions/profileActions';

const EditProfileComponent = (props) => {
 const {profile} = props;
 const [name, setName] = useState(profile.name);
  const [mobile, setMobile] = useState(profile.mobile);
 const [address, setAddress] = useState(profile.address);
  
  const updateProfile = (e) => {
     e.preventDefault();
     const  {updateMyProfile} = props;
     updateMyProfile({name,mobile,address});
  }

 console.log(props);
return (<div><h1>Profile</h1>
  <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /><br /><br />
  <input type="text" value={profile.email} readOnly/><br /><br />
<input type="text" value={mobile}  onChange={(e)=> setMobile(e.target.value)} /><br /><br />
<textarea type="text" value={address}  onChange={(e)=> setAddress(e.target.value)} ></textarea>
<br /><br />
<input type="button" value="Update" onClick={(e)=>{updateProfile(e)}}/>
</div>);
} 

const mapstateToProps = (state, props) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {updateMyProfile: (data) => { updateMyProfile(dispatch,data)}};
}


export default connect(
  mapstateToProps,
  mapDispatchToProps
)(EditProfileComponent)

