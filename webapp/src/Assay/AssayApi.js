// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Constants from './Constants'

class Api {
    constructor() {

        this.createEndpoint = (baseURL) => apisauce.create({
            // base URL is read from the "constructor"
            baseURL: baseURL + '/',
            // here are some default headers
            headers: {
                'Cache-Control': 'no-cache'
            },
            // timeout...
            timeout: 2400000
        })

        this.initialize = (baseURL) => {
            this.apiClient = this.createEndpoint(baseURL)
        }

        this.fetchUser = () => this.apiClient.get('users', null, { headers: { 'X-SELECT': JSON.stringify({}) } })
        // this.editUser=  param => this.apiClient.put('v2/user', param)
        // this.postUser = param => this.apiClient.post('v2/user', param)

        this.setToken = (token) => {
            this.apiClient.setHeader('Authorization', 'Bearer ' + token)
        }
    }

}

// let's return back our create method as the default.
export default new Api()
