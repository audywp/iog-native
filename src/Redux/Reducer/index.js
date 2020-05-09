
import { combineReducers } from 'redux'
import isLogin from './Auth/Login'
import isRegister from './Auth/Register'
import dataSchedule from './Schedule'
import UserDetail from './User/UserDetail'
import Routes from './Routes'
import Agents from './Agent'
import TopUp from './User/TopUp'
import GetSchedules from './User/Purchase'

const allReducers = combineReducers({
  isLogin, isRegister, dataSchedule, UserDetail, Routes, Agents, TopUp, GetSchedules
})

export default allReducers