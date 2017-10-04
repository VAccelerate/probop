import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const SafeModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} autoFocus={false}>
      <ModalBody>
        <h1>Danger alert sent!</h1>
        <p>TBC Help is on the way</p>
      </ModalBody>
      <ModalFooter>
        <Button color='success' onClick={props.toggle}>
          I&#39;m feeling safe now
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default SafeModal
