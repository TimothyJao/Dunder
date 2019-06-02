import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { createChannel } from '../../actions/channel_actions';
// import { createUserServer } from '../../actions/user_server_actions'
import ServerForm from './channel_form';
import { closeModal, openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    let url = ownProps.location.pathname
    let serverId = parseInt(url.slice(8))
    return {
        serverId: serverId,
        errors: state.errors.session,
        id: parseInt(Object.keys(state.entities.users)[0])
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        createChannel: (channel) => dispatch(createChannel(channel)),
        closeModal: () => dispatch(closeModal()),
        openModal: (choice) => dispatch(openModal(choice)),
        
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));