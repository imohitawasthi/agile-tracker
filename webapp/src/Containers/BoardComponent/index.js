import { connect } from 'react-redux'

import Board from './Component/Board'
import Actions from '../../Actions/Creators'

const mapStateToProps = (state, ownProps) => {
    return {
        bucket: state.task.bucket,
        task: state.task.task,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTask: () => dispatch(Actions.getTask()),
        postTask: (payload) => dispatch(Actions.postTask(payload)),
        putTask: (payload, id) => dispatch(Actions.putTask(payload, id)),

        getBucket: () => dispatch(Actions.getBucket()),
        postBucket: (payload) => dispatch(Actions.postBucket(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
