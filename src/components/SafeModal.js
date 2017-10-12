import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import './SafeModal.css'

const SafeModal = (props) => {
  const sendSafeSMS = () => {
    let contacts = ''
    navigator.geolocation.getCurrentPosition((position) => {
      if (props.content.heading === 'Danger alert sent!') {
        contacts = props.dangerContacts
      } else contacts = props.vulnerableContacts

      window.location = contacts + props.safeMessage + `http://www.google.com/maps/place/${position.coords.latitude},${position.coords.longitude}`
    })
  }

  return (
    <Modal style={{opacity: 0.9}} isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody className='text' style={props.content.style}>
        <h2>{props.content.heading}</h2>
        <p>{props.content.message}</p>
      </ModalBody>
      <ModalFooter className='footer' style={props.content.style}>
        <Button className='button' color='success' onClick={() => { props.toggle(); sendSafeSMS() }} block>
          <h3>{props.content.button}</h3>
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default SafeModal
