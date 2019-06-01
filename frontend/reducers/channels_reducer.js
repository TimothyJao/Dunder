import { RECEIVE_CURRENT_CHANNEL, RECEIVE_ALL_CHANNELS, DELETE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_CHANNELS:
            return Object.assign({}, state, action.channels);
        case RECEIVE_CURRENT_CHANNEL:
            return Object.assign({}, state, { [action.currentServer.id]: action.currentServer });
        case DELETE_CHANNEL:
            var newState = Object.assign({}, state);
            delete (newState[action.channel.id])
            return newState;
        default:
            return state;
    }
};

export default channelsReducer;