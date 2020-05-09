const initialState = {
  data: {},
  isLoading: false,
}

export default function UserDetail (state = initialState, {type, payload}){
  switch (type) {
    case 'GET_USERDETAIL':
      return {
        ...state,
        isLoading: true,
        data: payload,
      };
    default:
      return {...state};
  }
}