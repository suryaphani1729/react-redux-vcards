import React from 'react';
import './styles.css';
const ProfileCard = (props) => {
 const {name,email,mobile,address} = props.profile;
return (<div className="card">
{props.children}
<ul>
  <li>Name: {name}</li>
  <li>Email: {email} </li>
  <li>Mobile: {mobile} </li>
  <li>Address: {address} </li>
  </ul></div>);
} 
export default ProfileCard;

