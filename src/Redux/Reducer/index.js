
import { combineReducers } from 'redux'
import isLogin from './Auth/Login'
import isRegister from './Auth/Register'


const allReducers = combineReducers({
  isLogin, isRegister
})

export default allReducers