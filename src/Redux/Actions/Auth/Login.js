import config from '../../../utils/Config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const setLogin = (data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('user/login'), data)
    console.log(res.data)
    if (res.data.success === true) {
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({
        type: 'IS_LOGIN',
        payload: res.data,
      })
    } else {
      console.log('failed')
    }
  } catch (error) {
    console.log(error)
  }
};

export const setLogout = () => {
  AsyncStorage.removeItem('token');
  return {
    type: 'SET_LOGOUT',
  };
};