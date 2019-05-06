import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import {fetchServers} from '../../actions/server_actions'
import BrowseForm from './browse_form.jsx';

const mapStateToProps = (state) => {
    return {
        username: state.session.username,
        servers: state.entities.servers,
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchServers: () => dispatch(fetchServers())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseForm);