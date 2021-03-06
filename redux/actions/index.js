import {actionTypes} from './../types'

// ACTIONS
export const serverRenderClock = () => {
    return { type: actionTypes.TICK, light: false, ts: Date.now() }
  }
  export const startClock = () => {
    return { type: actionTypes.TICK, light: true, ts: Date.now() }
  }
  
  export const incrementCount = ()=> async dispatch =>{
  
    dispatch({ type:actionTypes.AUTH })
    dispatch( { type: actionTypes.INCREMENT });
  }
  
  export const decrementCount = () => {
    return { type: actionTypes.DECREMENT }
  }
  
  export const resetCount = () => {
    return { type: actionTypes.RESET }
  }