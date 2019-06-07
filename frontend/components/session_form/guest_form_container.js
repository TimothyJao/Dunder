import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import GuestSessionForm from './guest_session_form';
import { Link } from 'react-router-dom'

const mapDispatchToProps = dispatch => (
    {
        processForm: (user) => dispatch(login(user)),
        navLink:
            <div className="guest-switch">
                <Link className="switch" to="/login">login</Link>
                <p> or </p>
                <Link className="switch" to="/signup"> sign up</Link>
            </div>
    }
);

export default connect(null, mapDispatchToProps)(GuestSessionForm);