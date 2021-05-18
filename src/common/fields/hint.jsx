import React from 'react'
import PropTypes from 'prop-types'
// import { Popup } from 'semantic-ui-react'

const style ={
  background: "#fed230",
  opacity:.8,
  borderRadius: 0,
  color: "#000",
}

const FieldHint = ({ content }) => {
  return (
    <div className="pt-1 ml-1 d-inline-block d-md-none">
      {/* <Popup
        trigger={<i className="ri-question-fill text-mid ms-2" />}
        content={content}
        position="right center"
        inverted
        style={style}
        size="tiny"
      /> */}
    </div>
  )
}

FieldHint.propTypes = {
  content: PropTypes.string
}

export default FieldHint
