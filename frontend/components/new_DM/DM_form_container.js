import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { createDM} from '../../actions/channel_actions';
// import { createUserServer } from '../../actions/user_server_actions'
import DMForm from './DM_form';
import { closeModal, openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        sender_id: parseInt(Object.keys(state.entities.users)[0])
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        createDM: (sender_id, recipient_username) => dispatch(createDM(sender_id, recipient_username)),
        closeModal: () => dispatch(closeModal()),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DMForm));