import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchChannels, createChannel, deleteChannel } from '../../actions/channel_actions'
import {fetchServer} from '../../actions/server_actions'
import channelForm from './channel_form';

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.session.username,
        serverId: parseInt(ownProps.match.params.server_id),
        channelId: parseInt(ownProps.match.params.channel_id),
        currentUser: Object.values(state.entities.users),
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels)
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchChannels: server_id => dispatch(fetchChannels(server_id)),
    fetchServer: server_id => dispatch(fetchServer(server_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(channelForm));
