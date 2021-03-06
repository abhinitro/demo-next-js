// REDUCERS

import {actionTypes} from './../types'
  


export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
      case actionTypes.TICK:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })
      case actionTypes.INCREMENT:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      case actionTypes.DECREMENT:
        return Object.assign({}, state, {
          count: state.count - 1
        })
      case actionTypes.RESET:
        return Object.assign({}, state, {
          count: exampleInitialState.count
        })
  
        case actionTypes.AUTH:
        console.log("I am on Auth")
        return Object.assign({}, state, {
          auth: true
        })
  
  
      default:
        return state
    }
  }