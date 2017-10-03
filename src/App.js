import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Contacts from './components/Contacts'
import ListContacts from './components/ListContacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Contacts />
        <ListContacts />
      </div>
    );
  }
}

export default App;
