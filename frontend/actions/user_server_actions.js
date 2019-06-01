import * as APIUtil from '../util/user_server_api_util';

export const RECEIVE_USERS_SERVERS = "RECEIVE_USERS_SERVERS"
export const RECEIVE_USER_SERVER = "RECEIVE_USER_SERVER"
export const DELETE_USER_SERVER = "DELETE_USER_SERVER";

export const receiveUsersServers = usersServers => {
    return ({
        type: RECEIVE_USERS_SERVERS,
        usersServers
    })
}

export const receiveUserServer = userServer => {
    return ({
        type: RECEIVE_USER_SERVER,
        userServer
    })
}

export const destroyUserServer = userServer => {
    return ({
        type: DELETE_USER_SERVER,
        userServer
    })
}

export const fetchUsersServers = () => dispatch => {
    return (
        APIUtil.fetchUsersServers().then(
            usersServers => (dispatch(receiveUsersServers(usersServers))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const createUserServer = (userServer) => dispatch => {
    return (
        APIUtil.createUserServer(userServer).then(
            userServer => (dispatch(receiveUserServer(userServer))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const deleteUserServer = (userServer) => dispatch => {
    return (
        APIUtil.deleteUserServer(userServer.id).then(
            userServer => (dispatch(destroyUserServer(userServer))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}