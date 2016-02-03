import { createStore, applyMiddleware, compose } from 'redux'
import sagaMiddleware from 'redux-saga'
import saga from '../sagas'
import reducer from '../reducers'

const middleware = compose(
  applyMiddleware(
    sagaMiddleware(saga)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = middleware(createStore)(reducer, {})
