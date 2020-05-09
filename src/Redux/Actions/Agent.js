import config from '../../utils/Config'
import axios from 'axios'
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

export const Agents = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`admin/agent`))
    dispatch({
      type: 'GET_AGENT',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}