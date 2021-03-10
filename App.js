import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import createStore from './src/store/createStore'
import ModalWrapper from './src/common/modal/ModalWrapper'
import Layout from './src/containers/Layout'
import 'semantic-ui-css/semantic.min.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'remixicon/fonts/remixicon.css'
import './src/styles/main.scss'

const App = ({ element }) => {
  const store = createStore()

  return (
    <Provider store={store}>
      <ModalWrapper />
      <ReduxToastr position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut" />
      <Layout>{element}</Layout>
    </Provider>
  )
}

// App.defaultProps = {
//   element: null
// }

// App.propTypes = {
//   element: PropTypes.instanceOf(Object)
// }

export default App
