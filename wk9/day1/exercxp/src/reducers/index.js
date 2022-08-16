const initState = {
  count: 0,
}

export default const counterReducer (
    state = initState,
    action = {} ) =>
    {
        switch(action.type) {
            case ActionTypes.INCREASE_COUNT:
                return {count: state.count + 1}
            case ActionTypes.DECREASE_COUNT:
                return {count: state.count - 1} 
            default:
                return state
        }
    
