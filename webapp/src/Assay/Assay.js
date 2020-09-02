import Constants from './Constants'
import Api from './AssayApi'
import Master from './AssayMaster'
import Task from './AssayTask'

class Assay {

    constructor() {

        this.initialize = (options) => {
            this.apiUrl = (options && options.apiUrl) ? options.apiUrl : Constants.API_HOST
            this.API_PORT = (options && options.API_PORT) ? options.API_PORT : Constants.API_PORT
            this.Storage = (options && options.storage) ? options.storage : window.sessionStorage

            this.Master = new Master(this)
            this.Task = new Task(this)

            this.API_PROTOCOL = (options && options.API_PROTOCOL) ? options.API_PROTOCOL : 'http://'
            Api.initialize(this.API_PROTOCOL + this.apiUrl + (this.API_PORT ? `:${this.API_PORT}` : ''))
        }

        this.getSession = () => {
            let sessionToken = this.Storage.getItem('sessionToken')
            if (sessionToken) {
                sessionToken = JSON.parse(sessionToken)
                Api.setToken(sessionToken)
            }
            return sessionToken
        }
    
        this.setSession = (token) => {
            this.Storage.setItem('sessionToken', JSON.stringify(token))
        }
    
        this.removeSession = () => {
            this.Storage.removeItem('sessionToken')
        }

    }

}

export default new Assay()
