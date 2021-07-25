const initialState = {
    simbolo : ''
}

// funcao que troca os valores do reducer
const simboloReducer = (state=initialState.simbolo, action) => {
  switch(action.type){
    case 'TROCA_SIMBOLO':
      return {simbolo: action.payload}
    default:
      return state
  }
}

export default simboloReducer