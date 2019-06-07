import * as APIUtil from '../util/user_server_api_util';
import {RECEIVE_PAYLOAD} from './server_actions'
export const RECEIVE_USERS_SERVERS = "RECEIVE_USERS_SERVERS";
export const RECEIVE_USER_SERVER = "RECEIVE_USER_SERVER";
export const DELETE_USER_SERVER = "DELETE_USER_SERVER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUsersServers = usersServers => {
    return ({
        type: RECEIVE_USERS_SERVERS,
        usersServers
    })
}

const receiveUserServer = payload => {
    return ({
        type: RECEIVE_PAYLOAD,
        payload
    })
}

const destroyUserServer = userServer => {
    return ({
        type: DELETE_USER_SERVER,
        userServer
    })
}

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

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
            payload => (dispatch(receiveUserServer(payload))),
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