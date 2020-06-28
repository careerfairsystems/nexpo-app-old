import { AsyncStorage } from '@react-native-community/async-storage'
import * as types from './types'

const loadLogout = () => {
  AsyncStorage.removeItem('token')
  return (
    {
      type: types.LOGOUT
    }
  )
}

export default loadLogout
