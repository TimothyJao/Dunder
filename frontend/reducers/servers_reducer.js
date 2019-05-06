import { RECEIVE_CURRENT_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SERVERS:
            return action.servers;
        case RECEIVE_CURRENT_SERVER:
            return Object.assign({}, state, {[action.currentServer.id]: action.currentServer});
        default:
            return state;
    }
};

export default serversReducer;