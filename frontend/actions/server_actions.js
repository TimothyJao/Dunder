import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS"
export const RECEIVE_CURRENT_SERVER = "RECEIVE_CURRENT_SERVER";

export const receiveAllServers = servers => {
    return({
        type: RECEIVE_ALL_SERVERS,
        servers
    })
}

export const receiveCurrentServer = currentServer => {
    return({
        type: RECEIVE_CURRENT_SERVER,
        currentServer
    })
}

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const createServer = server => dispatch => {
    return(
        APIUtil.createServer(server).then(
            server => (dispatch(receiveCurrentServer(server))), 
            err => (dispatch(receiveErrors(err.responseJSON))))
    )
}

export const fetchServer = id => dispatch => {
    return(
        APIUtil.fetchServer(id).then(
            server => (dispatch(receiceCurrentServer(server))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchServers = () => dispatch => {
    return (
        APIUtil.fetchServers().then(
            servers => (dispatch(receiceAllServers(servers))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}