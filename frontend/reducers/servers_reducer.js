import { RECEIVE_CURRENT_SERVER, RECEIVE_ALL_SERVERS, RECEIVE_PAYLOAD, DELETE_SERVER } from '../actions/server_actions';
import { DELETE_USER_SERVER } from '../actions/user_server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_CURRENT_SERVER:
            return Object.assign({}, state, {[action.currentServer.id]: action.currentServer});
        case RECEIVE_PAYLOAD:
            return Object.assign({}, state, { [action.payload.server.id]: action.payload.server});
        case DELETE_SERVER:
            var newState = Object.assign({}, state);
            delete(newState[action.server.id])
            return newState;
        case DELETE_USER_SERVER:
            var newState = Object.assign({}, state);
            delete (newState[action.userServer.server_id])
            return newState;
        default:
            return state;
    }
};

export default serversReducer;