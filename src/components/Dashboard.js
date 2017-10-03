import React, { Component } from 'react'
import { Button } from 'reactstrap'

import SafeModal from './SafeModal'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {modal: false}
    this.toggle = this.toggle.bind(this)
    console.log(this.state)
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    }, () => console.log(this.state.modal))
  }

  render(){
    return (
      <div>
        <h1>Dashboard</h1>
        <Button color="danger" onClick={this.toggle}>
          <h3>I need urgent help</h3>
          <p>TBC</p>
        </Button>
        <br/>
        <br/>
        <Button color="warning" onClick={this.toggle}>
          <h3>I&#39;m feeling vulnerable</h3>
        </Button>
        <SafeModal toggle={this.toggle} modal={this.state.modal} />
      </div>
    )
  }
}

export default Dashboard
