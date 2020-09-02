import Types from './Types'

const getTask = () => ({
    type: Types.GET_TASK
})

const responseTask = (response) => ({
    type: Types.RESPONSE_TASK,
    response
})

const postTask = (payload) => ({
    type: Types.POST_TASK,
    payload
})

const putTask = (payload, taskId) => ({
    type: Types.PUT_TASK,
    payload,
    taskId
})

const getBucket = () => ({
    type: Types.GET_BUCKET
})

const responseBucket = (response) => ({
    type: Types.RESPONSE_BUCKET,
    response
})

const postBucket = (payload) => ({
    type: Types.POST_BUCKET,
    payload
})

const deleteBucket = (bucketId) => ({
    type: Types.DELETE_BUCKET,
    bucketId
})

export default {

    getTask,
    responseTask,
    
    postTask,
    putTask,

    getBucket,
    responseBucket,
    
    postBucket,
    deleteBucket
    
}