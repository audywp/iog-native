const initialState = {
  data: [],
  isLoading: false
}

export default function Routes (state = initialState, {type, payload}) {
  switch (type) {
    case "GET_ROUTES":
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