import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const UserAlert = ({ priority, title, description }) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant={priority} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{description}</p>
      </Alert>
    </>
  )
}

export default UserAlert
