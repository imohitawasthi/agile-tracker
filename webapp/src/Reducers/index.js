import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import MasterReducer from './MasterReducer'
import TaskReducer from './TaskReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
    master: MasterReducer,
    task: TaskReducer
})

export const persistentStoreBlacklist = [
    'master',
    'task'
]
