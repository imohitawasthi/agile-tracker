import { put, call, takeEvery } from "redux-saga/effects"

import Actions from "../Actions/Creators"
import Types from "../Actions/Types"
import Assay from "../Assay/Assay"

function* getTask(action) {
    const response = yield call(Assay.Task.getTask, Assay.Task)
    if (response && response.length) {
        yield put(Actions.responseTask(response))
    } else {
        yield put(Actions.responseTask([]))
    }
}

function* postTask(action) {
    yield call(Assay.Task.postTask, Assay.Task, action.payload)
    yield put(Actions.getTask())
}

function* putTask(action) {
    yield call(Assay.Task.putTask, Assay.Task, action.payload, action.taskId)
    yield put(Actions.getTask())
}

function* getBucket(action) {
    const response = yield call(Assay.Task.getBucket, Assay.Task)
    if (response && !!!response.error) {
        yield put(Actions.responseBucket(response))
    } else {
        // yield put(Actions.responseBucket([]))
    }
}

function* postBucket(action) {
    yield call(Assay.Task.postBucket, Assay.Task, action.payload)
    yield put(Actions.getBucket())
}

// Saga Watcher
export function* watchTask() {
    yield* [
        takeEvery(Types.GET_TASK, getTask),
        takeEvery(Types.POST_TASK, postTask),
        takeEvery(Types.PUT_TASK, putTask),

        takeEvery(Types.GET_BUCKET, getBucket),
        takeEvery(Types.POST_BUCKET, postBucket),
    ]
}
