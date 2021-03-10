import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


export default function createReduxStore(initialState = {}) {
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (typeof window !== `undefined`) {
    if (window && window.location && window.location.hostname === 'localhost') {
      const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
      if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
      }
    }
  }

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    // thunk.withExtraArgument(),
    thunk
    // This is where you add other middleware like redux-observable
  ]

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    rootReducer(),
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  )

  return store
}