import Constants from './Constants'
import Api from './AssayApi'
import Master from './AssayMaster'

class Assay {

    constructor() {

        this.initialize = (options) => {
            this.apiUrl = (options && options.apiUrl) ? options.apiUrl : Constants.apiHost
            this.apiPort = (options && options.apiPort) ? options.apiPort : Constants.apiPort
            this.Storage = (options && options.storage) ? options.storage : window.sessionStorage

            this.Master = new Master(this)

            this.apiProtocol = (options && options.apiProtocol) ? options.apiProtocol : 'http://'
            Api.initialize(this.apiProtocol + this.apiUrl + this.apiPort)
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
