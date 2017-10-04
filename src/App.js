import React, { Component } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    )
  }
}

export default App
