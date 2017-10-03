import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

const SafeModal = (props) => {
  return(
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalBody>
        Danger Alert Sent!
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle}>
          Im feeling safe now
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default SafeModal
