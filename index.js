import React, { Component } from 'react';
import { render } from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import profileReducer from './store/reducers/profileReducer';
import friendsReducer from './store/reducers/friendsReducer';
import acceptFriendsReducer from './store/reducers/acceptFriendsReducer';
import ProfileComponent from './components/profile/ProfileComponent';
import FriendsComponent from './components/friends/FriendsComponent';
import AddFriendComponent from './components/friends/AddFriendComponent';
import EditProfileComponent from './components/profile/EditProfileComponent';
import AcceptFriendRequestComponent from './components/friends/AcceptFriendRequestComponent';

import './style.css';

const rootReducer = combineReducers({profile: profileReducer, friends: friendsReducer});

// saga - call, takelatest,
// thunk,
// middleware,

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
               <Link to="/edit">Edit Profile</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/addFriend">Add Friends</Link>
            </li>
             <li>
              <Link to="/accept">Accept Requests</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ProfileComponent  />
          </Route>
          <Route  path="/edit">
            <EditProfileComponent  />
          </Route>
          <Route path="/friends">
              <FriendsComponent />
          </Route>
          <Route path="/addFriend">
            <AddFriendComponent />
          </Route>
          <Route path="/accept">
            <AcceptFriendRequestComponent />
          </Route>
        </Switch>
      
      </div>
      </Router>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
