import Types from './Types'

const fetchUsers = () => ({
    type: Types.FETCH_USERS
})

const storeUsers = () => ({
    type: Types.STORE_USERS
})

export default {
    fetchUsers,
    storeUsers
}