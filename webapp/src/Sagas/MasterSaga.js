import { put, call, takeEvery } from 'redux-saga/effects'

import Actions from '../Actions/Creators'
import Types from '../Actions/Types'
import Assay from '../Assay/Assay'

function* fetchUsers(action) {

    const response = yield call(Assay.Master.fetchUsers, Assay.Master, null)
    if(response && !!!response.error){
        yield put(Actions.storeUsers(response))
    }else{
        yield put(Actions.storeUsers(null))
    }
}

// Saga Watcher
export function* watchMaster() {
  yield* [
    takeEvery(Types.FETCH_USERS, fetchUsers)
  ]
}