import { put, call, takeEvery } from 'redux-saga/effects'

import Actions from '../Actions/Creators'
import Types from '../Actions/Types'
import Assay from '../Assay/Assay'

// Saga Watcher
export function* watchMaster() {
  yield* []
}