import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { closeModal } from './modalActions'

const ImageModal = ({ image }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Modal show onHide={() => dispatch(closeModal())}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={image} className="img-fluid" alt="" />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ImageModal
