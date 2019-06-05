import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createChannel } from '../../actions/channel_actions';
import ServerForm from './new_channel';
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
        clearSessionErrors: () => dispatch(clearSessionErrors())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));