import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function LogOut() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Button style={{margin:"30px"}} variant="secondary" onClick={handleShow}>Log Out</Button>

       <Modal id="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='modtit'>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body id='modalbo'>Do you want to Logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LogOut