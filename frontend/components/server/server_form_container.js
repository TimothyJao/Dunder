import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchServers } from '../../actions/server_actions'
import { fetchUsersServers } from '../../actions/user_server_actions'
import { fetchChannels } from '../../actions/channel_actions'
import serverForm from './server_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        serverId: parseInt(ownProps.match.params.server_id),
        current_user: Object.values(state.entities.users),
        servers: Object.values(state.entities.servers)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchServers: () => dispatch(fetchServers()),
    fetchUsersServers: () => dispatch(fetchUsersServers()),
    fetchChannels: (server_id) => dispatch(fetchChannels(server_id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(serverForm));
