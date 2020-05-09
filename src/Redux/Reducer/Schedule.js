const initialState = {
  data: [],
  isLoading: false
}

export default function dataSchedule (state = initialState, {type, payload}) {
  switch (type) {
    case "SET_SCHEDULE":
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