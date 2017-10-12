import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ManageContacts from './ManageContacts'
import AddContact from './AddContact'
import EditContact from './EditContact'

const Contacts = (props) => (
  <div>
    <Switch>
      <Route exact path='/contacts' render={() => <ManageContacts showMenu={props.showMenu} />} />
      <Route path='/contacts/add-contact' component={AddContact} />
      <Route path='/contacts/edit-contact' component={EditContact} />
    </Switch>
    {console.log(props)}</div>
)

export default Contacts
