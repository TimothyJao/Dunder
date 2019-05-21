import { connect } from 'react-redux';
import ChatRoom from './chatroom';
import { withRouter } from 'react-router-dom'
import { fetchMessages } from '../../actions/chat_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        parentId: ownProps.match.params.server_id,
        sender_id: state.session.id,
        messages: state.entities.messages
    };
};

const mapDispatchToProps = dispatch => {
    return{
        fetchMessages: (parent_id)=>dispatch(fetchMessages(parent_id))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoom));