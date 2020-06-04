import axios from 'axios'
import Config from '../../../utils/Config'
import AsyncStorage from '@react-native-community/async-storage'
// const getToken = async () => {
//   try {
//     console.log(await AsyncStorage.getItem('token'))
//     axios.defaults.headers.common['Authorization'] = `Bearer ${await AsyncStorage.getItem('token')}`
//   } catch (error) {
//     console.log(error)
//   }
// }
// getToken()
export const UserDetail = (token) => async dispatch => {
  try {
    const res = await axios.get(Config.APP_BACKEND.concat(`user/detail`), { headers: { Authorization: `Bearer ${token}` } })
    dispatch({
      type: 'GET_USERDETAIL',
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}