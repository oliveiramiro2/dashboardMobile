import { applyMiddleware, createStore } from 'redux'
import ReduxPromise from 'redux-promise'

import { rootReducer } from './reducers/rootReducer'

// criando o redux definitivamente
export const store = createStore(rootReducer, applyMiddleware(ReduxPromise))