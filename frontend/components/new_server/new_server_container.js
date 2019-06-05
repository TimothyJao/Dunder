import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createServer, fetchServer } from '../../actions/server_actions';
import { createUserServer } from '../../actions/user_server_actions'
import ServerForm from './new_server';
import { closeModal, openModal } from '../../actions/modal_actions'
import { clearSessionErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        choice: ownProps.choice,
        state: state,
        errors: state.errors.session,
        id: parseInt(Object.keys(state.entities.users)[0])
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        createServer: (server) => dispatch(createServer(server)),
        closeModal: () => dispatch(closeModal()),
        openModal: (choice) => dispatch(openModal(choice)),
        fetchServer: (id) => dispatch(fetchServer(id)),
        createUserServer: (id) => dispatch(createUserServer(id)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));