import { combineReducers } from 'redux';

import users from './users_reducer';
import servers from './servers_reducer'
import users_servers from './users_servers_reducer'
import channels from './channels_reducer'
import messages from './messages_reducer'

export default combineReducers({
    users,
    servers,
    users_servers,
    channels,
    messages
});