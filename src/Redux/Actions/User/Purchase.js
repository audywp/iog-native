import axios from 'axios'
import Config from '../../../utils/Config'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } catch (error) {
    console.log(error)
  }
}
getToken()
export const GetSchedules = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat(`user/purchase`), data)
    dispatch({
      type: 'GET_SCHEDULES_USER',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const Purchase = (token, data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('user/transaction/add'), data, { headers: { Authorization: `Bearer ${token}` } })
    dispatch({
      type: 'PURCHASE_SCHEDULES',
      payload: res.data
    });
  } catch (err) {
    console.log(err)
  }
}

export const Indomaret = (data) => async dispatch => {

  try {
    const res = await axios.post('https://api.sandbox.midtrans.com/v2/charge', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: 'Basic U0ItTWlkLXNlcnZlci14aUtaLTUycDkzNUhQVkk4X1QzMWZHcjQ6' }
    })
    console.log(res)
    if (res) {
      dispatch({
        type: 'INDOMARET',
        payload: res.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const ValidationPayment = (order_id) => async dispatch => {
  try {
    const res = await axios.get(`https://api.sandbox.midtrans.com/v2/${order_id}/status`, {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Authorization: 'Basic U0ItTWlkLXNlcnZlci14aUtaLTUycDkzNUhQVkk4X1QzMWZHcjQ6' }
    })
    console.log(res)
    if (res) {
      dispatch({
        type: 'VALIDATION',
        payload: res.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const CreatePayment = (data) => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('user/payment'), data)
    if (res) {
      dispatch({
        type: 'CREATE_PAYMENT',
        payload: res.data
      })
    } else {
      Alert.alert('your payment failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const GetPayment = () => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat('user/history'))
    if (res) {
      dispatch({
        type: 'HISTORY_PAYMENT',
        payload: res.data
      })
    } else {
      Alert.alert('history not found')
    }
  } catch (error) {
    console.log(error)
  }
}

export const GetPaymentByOrderId = (id) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/order/${id}`))
    if (res) {
      dispatch({
        type: 'GET_BY_ORDERID',
        payload: res.data
      })
    } else {
      Alert.alert('your payment failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export const UpdatePayment = (id) => async dispatch => {
  try {
    const res = await axios.patch(Config.APP_BACKEND.concat(`user/payment/${id}`))
    if (res) {
      dispatch({
        type: 'UPDATE_PAYMENT'
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(err)
  }
}