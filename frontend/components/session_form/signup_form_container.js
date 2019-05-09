import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom'
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearSessionErrors } from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        welcomeMessage: <>
                            <h3>Create an account!</h3>
                            <p>Get ready for an exciting adventure!</p>
                        </>,
        navLink: <Link className="switch" to="/login">log in instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);