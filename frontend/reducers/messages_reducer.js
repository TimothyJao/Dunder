import { RECEIVE_ALL_MESSAGES } from '../actions/chat_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES:
            return action.messages;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
};

export default messagesReducer;