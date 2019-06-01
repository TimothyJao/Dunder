import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { deleteServer } from '../../actions/server_actions';
import { deleteUserServer } from '../../actions/user_server_actions';
import deleteServerForm from './delete_server';
import { closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        usersServers: state.entities.users_servers,
        choice: ownProps.choice,
        servers: state.entities.servers,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        deleteServer: (id) => dispatch(deleteServer(id)),
        leaveServer: (id) => dispatch(deleteUserServer(id)),
        closeModal: () => dispatch(closeModal()),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(deleteServerForm));