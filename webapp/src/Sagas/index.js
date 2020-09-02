import { fork } from 'redux-saga/effects'

import { watchMaster } from './MasterSaga'
import { watchTask } from './TaskSaga'

// start the daemons
export default function* root() {
    yield fork(watchMaster)
    yield fork(watchTask)
}
