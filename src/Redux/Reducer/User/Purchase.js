const initialState = {
  Schedules: [],
  dataPurchase: [],
  isLoading: false,
}

export default function GetSchedules (state = initialState, {type, payload}){
  switch (type) {
    case 'GET_SCHEDULES_USER':
      return {
        ...state,
        isLoading: true,
        Schedules: payload,
      };
    case 'PURCHASE_SCHEDULES':
      return {
        ...state,
        isLoading: true,
        dataPurchase: payload
      }
    default:
      return {...state};
  }
}