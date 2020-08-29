// a library to wrap and simplify api calls
import Api from './AssayApi'
import Constants from './Constants'

export default class AssayMaster {

    constructor(options) {

        this.phiRef = options

        this.fetchUsers = function* (that, config) {
            
            let token = that.phiRef.getSession()
            if(token){
                let response = yield Api.fetchUser()
                console.log(response)

                if (response.ok && response.data && response.data.results && response.data.results.length > 0) {
                    return response.data.results[0]
                } else {
                    return {
                        error: response.problem
                    }
                }
            }

        }

    }


}