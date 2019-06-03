import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import {fetchServers} from '../../actions/server_actions'
import { fetchUsersServers } from '../../actions/user_server_actions'
import BrowseForm from './browse_form.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.session.username,
        servers: state.entities.servers,
        channelId: ownProps.match.params.channel_id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchUsersServers: () => dispatch(fetchUsersServers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseForm);