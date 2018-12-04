const { createStore, combineReducers } = require('redux')

// Reducer | Change are may by pure functions
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const message = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_IT':
      return action.message
    default:
      return state
  }
}

const reducers = combineReducers({counter, message})

// Single source of truth
const store = createStore(reducers)

store.subscribe(() => console.log(store.getState()))

// Actions | State read only
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'CHANGE_IT', message: 'Holaaaaaa!!!!!!' })

store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })
