const { createStore } = require('redux')

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

// Single source of truth
const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

// Actions | State read only
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })

store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })
