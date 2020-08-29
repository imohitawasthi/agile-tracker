import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import MasterReducer from './MasterReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
    master: MasterReducer
})

export const persistentStoreBlacklist = [
    'master'
]
