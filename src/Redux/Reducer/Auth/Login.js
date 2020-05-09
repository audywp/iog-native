

const initialState = {
  data: {},
  isLoading: false,
  isLogged: false
}

export default function isLogin(state = initialState, {type, payload}) {
  switch (type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        isLogged: true,
        isLoading: true,
        data: payload,
      };
    }
    case 'SET_PASSWORD': {
      return {
        ...state,
        isLoading: true,
        data: payload
      };
    }
    case 'SET_LOGOUT': {
      return {
        ...state,
        isLogged: false,
        isLoading: false,
        data: {}
      };
    }
    default:
      return state;
  }
}