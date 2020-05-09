import config from '../../utils/Config'
import axios from 'axios'


export const dataSchedule = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('user/schedule'))
    dispatch({
      type: 'SET_SCHEDULE',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}