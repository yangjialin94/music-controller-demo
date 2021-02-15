import React, { Component } from 'react';
import { render } from 'react-dom';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <p>This is the home page</p>
          </Route>
          <Route exact path='/join' component={RoomJoinPage} />
          <Route exact path='/create' component={CreateRoomPage} />
          <Route exact path='/room/:roomCode' component={Room} />
        </Switch>
      </Router>
    );
  }
}
