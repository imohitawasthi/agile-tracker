import { connect } from 'react-redux'

import App from './Component/App'
import Actions from './../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.master.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(Actions.fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
