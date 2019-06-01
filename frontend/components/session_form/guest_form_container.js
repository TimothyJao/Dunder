import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import GuestSessionForm from './guest_session_form';

<<<<<<< HEAD
const mapDispatchToProps = dispatch => (
    {
        processForm: (user) => dispatch(login(user))
    }
);
=======
const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
};
>>>>>>> b78d3b7e2c0211d953ca5e0b8d92a2813fe15dfa

export default connect(null, mapDispatchToProps)(GuestSessionForm);