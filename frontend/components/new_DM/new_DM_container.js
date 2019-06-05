import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createDM} from '../../actions/channel_actions';
import DMForm from './new_DM';
import { closeModal } from '../../actions/modal_actions'
import { clearSessionErrors } from '../../actions/session_actions'

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
        clearSessionErrors: () => dispatch(clearSessionErrors())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DMForm));