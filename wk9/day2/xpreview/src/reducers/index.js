import { combineReducers } from "redux"
import { INCREASE_COUNT, DECREASE_COUNT } from "../actions"

const initialState = {
  count: 0,
}

export const reducer_increase = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 }
    default:
      return { ...state }
  }
}

export const reducer_decrease = (state = initialState, action = {}) => {
  switch (action.type) {
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 }
    default:
      return { ...state }
  }
}

export const reducer = combineReducers({
  reducer_increase,
  reducer_decrease,
})
