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

const deleteTask = (taskId) => ({
    type: Types.DELETE_TASK,
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
    deleteTask,

    getBucket,
    responseBucket,
    
    postBucket,
    deleteBucket
    
}