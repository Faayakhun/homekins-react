import React from 'react'
import {Modal,Button} from 'react-bootstrap'

function LoginModal(props) {
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className= 'button-center'>
        <Modal.Title id="contained-modal-title-vcenter">
          Login Role
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className= 'button-center'>
        <Button className='mr-3'>Login as Vendor</Button>
        <span></span>
        <Button className='mr-3'>Login as Mandor</Button>
        <span></span>
        <Button className='mr-3'>Login as User</Button>
        <span></span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default LoginModal
