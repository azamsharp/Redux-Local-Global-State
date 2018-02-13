
import * as actionTypes from './actions'

const initialState = {
  counter : 123,
  results : []
}

const reducer = (state = initialState,action) => {

  switch(action.type) {
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        counter : state.counter + 1
      }

    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        counter : state.counter - 1
      }

    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter : state.counter + action.value
      }

    case actionTypes.ON_SAVE_RESULT:
      return {
        ...state,
        results : state.results.concat(state.counter)
      }

    case actionTypes.ON_SAVE_NAME:
      return {
        ...state,
        results : state.results.concat(action.value)
      }

  }

/*
  if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter : state.counter + 1
    }
  } else if(action.type == "DEC_COUNTER") {
    return {
      ...state,
      counter : state.counter - 1
    }
  } else if(action.type == "ADD_COUNTER") {
    return {
      ...state,
      counter : state.counter + action.value
    }
  }
  */


  return state
}

export default reducer
