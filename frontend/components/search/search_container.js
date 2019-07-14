import { connect } from 'react-redux';
import Search from './search';
import { findUsers } from '../../actions/session_actions'
import { createDM } from '../../actions/channel_actions'
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
    return{
        searchUsers: state.entities.search.searchUsers,
        currentUser: state.session
    }
};

const mapDispatchToProps = dispatch => {
    return{
        createDM: (sender_id, recipient_username) => dispatch(createDM(sender_id, recipient_username)),
        findUsers: (search)=>dispatch(findUsers(search))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));