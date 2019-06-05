import * as APIUtil from '../util/chat_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES"

const receiveAllMessages = messages => {
    return ({
        type: RECEIVE_ALL_MESSAGES,
        messages
    })
}

export const fetchMessages = (parent_id) => dispatch => {
    return (
        APIUtil.fetchMessages(parent_id).then(
            messages => (dispatch(receiveAllMessages(messages))),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
    )
}
