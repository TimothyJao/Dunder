import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { deleteChannel } from '../../actions/channel_actions';
import { deleteUserServer } from '../../actions/user_server_actions';
import deleteChannelForm from './delete_channel';
import { closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    let serverId = parseInt(ownProps.location.pathname.split('/')[2])
    let channelId = parseInt(ownProps.location.pathname.split('/')[3])
    return {
        channels: state.entities.channels,
        serverId: serverId,
        channelId: channelId,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        deleteChannel: (channel_id) => dispatch(deleteChannel(channel_id)),
        closeModal: () => dispatch(closeModal()),
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(deleteChannelForm));