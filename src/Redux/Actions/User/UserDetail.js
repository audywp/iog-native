import axios from 'axios'
import Config from '../../../utils/Config'
import AsyncStorage from '@react-native-community/async-storage'
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } catch (error) {
    console.log(error)
  }
}
getToken()
export const UserDetail = id => async dispatch => {
  const res = await axios.get(Config.APP_BACKEND.concat(`user/detail/${id}`))
  try {
    dispatch ({
      type: 'GET_USERDETAIL',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}