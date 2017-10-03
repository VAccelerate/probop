
import React, { Component } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Menu />
        <Dashboard />
      </div>
    )
  }
}

export default App
