import {createStore, compose, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

import allReducers from './Reducer';

const config = {
  key: 'iog',
  storage: AsyncStorage,
  
};

const persistedReducer = persistReducer(config, allReducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, thunk),
);
export let persistor = persistStore(store);
