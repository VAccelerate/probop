import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Dashboard />
      </div>
    );
  }
}

export default App;
