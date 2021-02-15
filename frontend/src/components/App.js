import React, { Component } from 'react';
import { render } from 'react-dom';
import Homepage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='center'>
        <Homepage />
      </div>
    );
  }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);
