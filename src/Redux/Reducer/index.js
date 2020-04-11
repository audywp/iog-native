
import { combineReducers } from 'redux'
import isLogin from './Auth/Login'


const allReducers = combineReducers({
  isLogin
})

export default allReducers