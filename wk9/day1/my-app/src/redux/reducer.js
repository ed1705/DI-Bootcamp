const initState = {
  prop_one: "One 666 from store",
  prop_two: "Two 2 from store",
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "CHANGE_PROP_ONE":
      return { ...state, prop_one: action.payload }
    default:
      return { ...state }
  }
}
