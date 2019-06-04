import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS"
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL"

export const receiveAllChannels = channels => {
    return ({
        type: RECEIVE_ALL_CHANNELS,
        channels
    })
}

export const receiveCurrentChannel = currentChannel => {
    return ({
        type: RECEIVE_CURRENT_CHANNEL,
        currentChannel
    })
}

export const deleteCurrentChannel = channel_id => ({
    type: DELETE_CHANNEL,
    channel_id
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const createChannel = channel => dispatch => {
    return (
        APIUtil.createChannel(channel).then(
            channel => (dispatch(receiveCurrentChannel(channel))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchChannel = channel => dispatch => {
    return (
        APIUtil.fetchChannel(channel.id).then(
            channel => (dispatch(receiveCurrentChannel(channel))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchChannels = (server_id) => dispatch => {
    return (
        APIUtil.fetchChannels(server_id).then(
            channels => (dispatch(receiveAllChannels(channels))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const fetchDMs = (user_id) => dispatch => {
    return(
        APIUtil.fetchDMs(user_id).then(
            channels => (dispatch(receiveAllChannels(channels))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}

export const createDM = (sender_id, recipient_username) => dispatch => {
    return(
        APIUtil.fetchUser(recipient_username).then(
            recipient => APIUtil.createChannel({ sender_id, recipient_id: recipient.id, name: recipient.username }).then(
                channel => (dispatch(receiveCurrentChannel(channel))),
                err => (dispatch(receiveErrors(err.responseJSON)))
            )
        )
    )
}

export const deleteChannel = (id) => dispatch => {
    return (
        APIUtil.deleteChannel(id).then(channel => dispatch(deleteCurrentChannel(channel)))
    )
}
