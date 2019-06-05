import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS"
export const RECEIVE_CURRENT_SERVER = "RECEIVE_CURRENT_SERVER";
export const RECEIVE_PAYLOAD = "RECEIVE_PAYLOAD"
export const DELETE_SERVER = "DELETE_SERVER"

const receiveAllServers = servers => {
    return({
        type: RECEIVE_ALL_SERVERS,
        servers
    })
}

const receiveCurrentServer = currentServer => {
    return({
        type: RECEIVE_CURRENT_SERVER,
        currentServer
    })
}

const receivePayload = payload => {
    return ({
        type: RECEIVE_PAYLOAD,
        payload
    })
}

const deleteCurrentServer = server => ({
    type: DELETE_SERVER,
    server
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const createServer = server => dispatch => {
    return(
        APIUtil.createServer(server).then(
            payload => (dispatch(receivePayload(payload))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchServer = server_id => dispatch => {
    return(
        APIUtil.fetchServer(parseInt(server_id)).then(
            server => (dispatch(receiveCurrentServer(server))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchServers = () => dispatch => {
    return (
        APIUtil.fetchServers().then(
            servers => (dispatch(receiveAllServers(servers))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const deleteServer = (id) => dispatch => {
    return (
        APIUtil.deleteServer(id).then(server => dispatch(deleteCurrentServer(server)))
    )
}
