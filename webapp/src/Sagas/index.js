import { fork } from 'redux-saga/effects'

import { watchMaster } from './MasterSaga'

// start the daemons
export default function* root() {
    yield fork(watchMaster)
}
