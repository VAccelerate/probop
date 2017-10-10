import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import './SafeModal.css'

const SafeModal = (props) => {
  return (
    <Modal style={{opacity: 0.9}} isOpen={props.modal} toggle={props.toggle} autoFocus={false} backdrop='static'>
      <ModalBody className='text' style={props.style}>
        <h2>{props.modalMessage}</h2>
        <p>We&#39;ve just sent a text message to your list</p>
      </ModalBody>
      <ModalFooter className='footer' style={props.style}>
        <Button className='button' color='success' onClick={props.toggle} block>
          <h3>I feel safe now</h3>
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default SafeModal
