import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { createServer } from '../../actions/server_actions';
import ServerForm from './server_form.js';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        id: parseInt(Object.keys(state.entities.users)[0])
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        createServer: (server) => dispatch(createServer(server)),
        closeModal: () => dispatch(closeModal())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));