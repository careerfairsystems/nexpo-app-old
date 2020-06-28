import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import apiReducer from './api'
import mapReducer from './map'
import companyReducer from './company'
import loginReducer from './company'
import eventReducer from './event'
import aboutReducer from './about'
import favoriteReducer from './favorite'
import cameraReducer from './camera'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['api', 'favoriteReducer', 'cameraReducer']
}

const apiPersistConfig = {
  key: 'api',
  storage: AsyncStorage,
  whitelist: ['items', 'filters', 'maps', 'updated', 'logedIn', 'companyLogedIn', 'myInfo', 'blips']
}

const rootReducer = combineReducers({
  apiReducer: persistReducer(apiPersistConfig, apiReducer),
  mapReducer,
  companyReducer,
  loginReducer,
  eventReducer,
  aboutReducer,
  favoriteReducer,
  cameraReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default persistedReducer
