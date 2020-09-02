import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Types from '../Actions/Types'

export const INITIAL_STATE = Immutable({ 
    task: [],
    bucket: []
})

const responseTask = (state, actions) => state.merge({task: actions.response})
const responseBucket = (state, actions) => state.merge({bucket: actions.response})

const ACTION_HANDLERS = { 
    [Types.RESPONSE_TASK]: responseTask,
    [Types.RESPONSE_BUCKET]: responseBucket
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
