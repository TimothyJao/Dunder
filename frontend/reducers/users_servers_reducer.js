import { RECEIVE_USERS_SERVERS, RECEIVE_USER_SERVER, DELETE_USER_SERVER } from '../actions/user_server_actions';
import {RECEIVE_PAYLOAD} from '../actions/server_actions'
const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS_SERVERS:
            return action.usersServers
        case RECEIVE_USER_SERVER:
            return Object.assign({}, state, { [action.userServer.id]: action.userServer });
        case RECEIVE_PAYLOAD: 
            return Object.assign({}, state, { [action.payload.user_server.id]: action.payload.user_server })
        case DELETE_USER_SERVER:
            let newState = Object.assign({}, state);
            delete (newState[action.userServer.id]);
            return newState;      
        default:
            return state;
    }
};

export default serversReducer;