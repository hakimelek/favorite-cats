import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

// reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FAVORITE': return { value: action.value, name: action.name }
    default: return state
  }
}

// actions
export const changeFavorite = (favorite) => dispatch => {
  return dispatch({ type: 'CHANGE_FAVORITE', value: favorite.value, name: favorite.name })
}

let store = null

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  } else {
    if (!store) {
      store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
      console.log(store.getState())
    }
    return store
  }
}
