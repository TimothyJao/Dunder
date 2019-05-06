import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchServers } from '../../actions/server_actions'
import BrowseForm from './browse_form.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        state: state,
        serverId: parseInt(ownProps.match.params.server_id),
        current_user: Object.values(state.entities.users),
        servers: Object.values(state.entities.servers)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchServers: () => dispatch(fetchServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseForm);