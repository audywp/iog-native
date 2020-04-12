import config from '../../../utils/Config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'

export const isRegister = (data) => async distpach => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('user/register'), data)
    console.log(res.data)
      distpach({
        type: 'SET_REGISTER',
        payload: res.data
      })
    
   

  } catch (error) {
    console.log(error)
  }
}