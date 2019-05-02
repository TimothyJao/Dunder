import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        welcomeMessage: <>
                            <h3>Welcome back!</h3>
                            <p>We're so excited to see you again!</p>
                        </>,
        navLink:
            <> 
                {/* <Link className="switch" to="/signup">sign up instead</Link> */}
                <Link className="switch" to ="/guest">login as guest</Link>
            </>
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);