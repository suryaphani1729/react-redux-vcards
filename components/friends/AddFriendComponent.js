import React, { useState } from 'react';


const AddFriendComponent = (props) => {
 const [email, setEmail] = useState("");

return (<div><h1>Add Friend</h1>
 <input type="email" placeholder="Enter Friend Email" value={email} onChange={(e)=> setEmail(e.target.value) } /> 
 <input type="button" value="Request" onClick={(e)=>{}}  />
</div>);
} 


export default AddFriendComponent;

