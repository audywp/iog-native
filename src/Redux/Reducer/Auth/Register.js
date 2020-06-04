const initialState = {
  data: {},
  isLoading: false,
}

export default function isRegister(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_REGISTER':
      return {
        ...state,
        isLoading: true,
        data: payload
      }


    default:
      return { ...state };
  }
}

