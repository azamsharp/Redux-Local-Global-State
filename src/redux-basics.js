
// redux object from the module 'redux'
const redux = require('redux')

// setting up initial state for the store
const initialState = {
  counter : 0
}

// creating  reducer
const rootReducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {

    // DO NOT DO THIS
    //state.counter++

    // always create a new object and return that object
    return {
      counter : state.counter + 1
    }
  }

  else if(action.type == "DEC_COUNTER") {

    return {
      counter : state.counter - 1
    }
  }

  else if(action.type == "ADD_COUNTER") {
    return {
      counter : state.counter + action.value
    }
  }

  return state
}

// getting the createStore function
const createStore = redux.createStore

// creating the store
const store = createStore(rootReducer)

// subscriptions
store.subscribe(() => {
  console.log(["Subscribe"],store.getState())
})

// print out the global state
console.log(store.getState())

// dispatching actions
store.dispatch({type : "INC_COUNTER"})
console.log(store.getState())
store.dispatch({type : "DEC_COUNTER"})
store.dispatch({type : "DEC_COUNTER"})
store.dispatch({type : "DEC_COUNTER"})
console.log(store.getState())
// sending a value with the dispatch
store.dispatch({type : "ADD_COUNTER", value : 10})

// SUBTRACT_COUNTER value 20


console.log(store.getState())
