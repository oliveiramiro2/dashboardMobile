import { combineReducers } from 'redux'

import valoresReducer from './valores'
import simboloReducer from './simboloR'

// criando um combine para caso haja mais de um reducer
export const rootReducer = combineReducers({
   informacoes: valoresReducer,
   simbolo: simboloReducer,
})