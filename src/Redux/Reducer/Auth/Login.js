

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
        data: payload,
      };
    }
    case 'SET_LOADING_AUTH': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SET_LOGOUT': {
      return {
        ...state,
        isLogin: false,
      };
    }
    default:
      return state;
  }
}