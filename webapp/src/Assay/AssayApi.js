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

        // this.getTask = () => this.apiClient.get('api/v1/task/', null, { headers: { 'X-SELECT': JSON.stringify({}) } })
        this.getTask = () => this.apiClient.get('api/v1/task/')

        this.postTask = (payload) => this.apiClient.post('api/v1/task/', payload)
        this.postTaskDetails = (payload) => this.apiClient.post('api/v1/task/Details/', payload)
        
        this.getBucket = () => this.apiClient.get('api/v1/bucket/')
        this.postBucket = (payload) => this.apiClient.post('api/v1/bucket/', payload)

        this.setToken = (token) => {
            this.apiClient.setHeader('Authorization', 'Bearer ' + token)
        }
    }

}

// let's return back our create method as the default.
export default new Api()
