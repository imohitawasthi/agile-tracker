// a library to wrap and simplify api calls
import Api from "./AssayApi"
import Constants from "./Constants"

export default class AssayTask {
    constructor(options) {
        this.phiRef = options

        this.getTask = function* (that) {
            let response = yield Api.getTask()
            if (response.ok && response.data && response.data.length > 0) {
                return response.data
            } else {
                return {
                    error: response.problem,
                }
            }
        }

        this.postTask = function* (that, payload) {
            let response = yield Api.postTask(payload)
            if (response.ok && response.data) {
                return true
            } else {
                return false
            }
        }

        this.putTask = function* (that, payload, taskId) {
            let response = yield Api.putTask(payload, taskId)
            if (response.ok && response.data) {
                return true
            } else {
                return false
            }
        }

        this.postTaskDetails = function* (that) {
            let response = yield Api.postTaskDetails()
            if (response.ok && response.data && response.data.results && response.data.results.length > 0) {
                return response.data.results[0]
            } else {
                return {
                    error: response.problem,
                }
            }
        }

        this.getBucket = function* (that) {
            let response = yield Api.getBucket()
            if (response.ok && response.data && response.data.length > 0) {
                return response.data
            } else {
                return {
                    error: response.problem,
                }
            }
        }

        this.postBucket = function* (that, payload) {
            let response = yield Api.postBucket(payload)
            if (response.ok && response.data) {
                return true
            } else {
                return false
            }
        }
    }
}
