import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../common/modal/modalActions'

const ModalSandbox = () => {
  const dispatch = useDispatch()

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Testing Modals</h1>
              <button type="button" onClick={() => dispatch(openModal('TestModal', { heading: 'Mom' }))}>Test Modal</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ModalSandbox
