import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from '../Actions/Types'

export const INITIAL_STATE = Immutable({ })

const ACTION_HANDLERS = { }

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
