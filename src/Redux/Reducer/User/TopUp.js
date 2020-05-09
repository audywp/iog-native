import { ActionSheet } from "native-base";

const initialState = {
  data: [],
  payment: [],
  validation: [],
  orderId: [],
  idPayment: 0,
  isLoading: false,
}

export default function TopUp (state = initialState, {type, payload}){
  switch (type) {
    case 'TOPUP':
      return {
        ...state,
        isLoading: true,
      };
    case 'INDOMARET' :
      return {
        ...state,
        isLoading: true,
        data: payload
      }
    case 'VALIDATION' :
      return {
        ...state,
        isLoading: true,
        validation: payload
      }
    case 'CREATE_PAYMENT':
      return {
        ...state,
        isLoading: true,
        idPayment: payload
      }
    case 'HISTORY_PAYMENT':
      return {
        ...state,
        isLoading: true,
        payment: payload
      }
    case 'GET_BY_ORDERID':
      return {
        ...state,
        isLoading: true,
        orderId: payload
      }
    case 'UPDATE_PAYMENT':
      return {
        ...state,
        isLoading: true,
      }
    default:
      return {...state};
  }
}