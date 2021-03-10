import React from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { closeModal } from './modalActions'


const TestModal = ({heading}) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeModal())}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

// TestModal.propTypes = {

// }

export default TestModal
