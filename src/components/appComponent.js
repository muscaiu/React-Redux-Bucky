import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/appComponent.css';
import Cart from './cartComponent'
import Users from './usersComponent'
import UserDetail from './userDetailComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">

          <Users />
          <UserDetail />
          <Cart />

        </div>
      </div>
    );
  }
}

export default App;
