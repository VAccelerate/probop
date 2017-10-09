import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ManageContacts from './ManageContacts'
import AddContact from './AddContact'
import EditContact from './EditContact'

const Contacts = () => (
  <Switch>
    <Route exact path='/contacts' component={ManageContacts} />
    <Route path='/contacts/add-contact' component={AddContact} />
    <Route path='/contacts/edit-contact' component={EditContact} />
  </Switch>
)

export default Contacts
