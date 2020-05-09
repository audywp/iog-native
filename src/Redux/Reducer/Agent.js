const initialState = {
  data: [],
  isLoading: false
}

export default function Agents (state = initialState, {type, payload}) {
  switch (type) {
    case "GET_AGENT":
      return {
        ...state,
        data: payload,
        isLoading: true
      }
    default:
      return {
        ...state
      }
  }
}