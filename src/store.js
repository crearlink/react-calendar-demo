import { createStore, compose } from 'redux'

import allReducers from './reducers'


const composeEnhancers =
  (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose


export default createStore(
  allReducers,
  composeEnhancers()
)
