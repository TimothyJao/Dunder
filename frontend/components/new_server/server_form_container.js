import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { createServer, fetchServer } from '../../actions/server_actions';
import { createUserServer } from '../../actions/user_server_actions'
import ServerForm from './server_form';
import { closeModal, openModal } from '../../actions/modal_actions'

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
        createUserServer: (id) => dispatch(createUserServer(id))
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));