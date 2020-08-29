import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from '../Actions/Types'

export const INITIAL_STATE = Immutable({
    users: null 
})

const storeUsers = (state, action) => {
  return state.merge({
    users: action.users
  })
}

const ACTION_HANDLERS = {
  [Types.STORE_USERS]: storeUsers
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
