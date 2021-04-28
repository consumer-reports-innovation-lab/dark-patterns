import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'


export default function createReduxStore() {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (typeof window !== `undefined`) {
    if (window && window.location) {
      const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
      if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
      }
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================

  const middleware = []

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================

  const store = createStore(
    rootReducer(),
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  return store
}