

const DEFAULT_USER_ID = 1

const API_PORT = '8000'
const API_HOST = 'localhost'
const API_PROTOCOL = 'http://'

const DATE_FORMAT = 'MMMM Do YYYY'


const MAP_ACTIVE_STATUS = {
    ACTIVE: 1,
    INACTIVE: 2,
    DELETED: 3 
}

const MAP_TASK_STATUS = {
    TO_DO: 101,
    IN_PROGRESS: 102,
    COMPLETED: 103,
    CLOSED: 104,
    DELETED: 105
}

const MAP_TASK_TYPE = {
    EPIC: 1,
    STORY: 101,
    TASK: 201,
    FEEDBACK: 301,
    BUG: 401
}

export default {
    DEFAULT_USER_ID,
    
    API_PORT,
    API_HOST,
    API_PROTOCOL,

    DATE_FORMAT,

    MAP_ACTIVE_STATUS,
    MAP_TASK_STATUS,
    MAP_TASK_TYPE
}