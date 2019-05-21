import { RECEIVE_ALL_MESSAGES } from '../actions/chat_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_MESSAGES:
            return action.messages;
        default:
            return state;
    }
};

export default messagesReducer;