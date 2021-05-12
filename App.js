import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import ModalWrapper from './src/common/modal/ModalWrapper'
import Layout from './src/containers/Layout'
import SEO from './src/containers/seo'

const App = ({ element }) => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ModalWrapper />
      {element}
    </Provider>
  )
}

export default App
