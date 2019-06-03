import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import NewServerContainer from '../new_server/server_form_container';
import DeleteServerContainer from '../remove_server/delete_server_container'
import CreateChannelContainer from '../new_channel/channel_form_container';
import DeleteChannelContainer from '../delete_channel/delete_channel_container'
import CreateDM from '../new_DM/DM_form_container'

function Modal({ modal, closeModal, ownProps }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'createDM':
            component = <CreateDM/>
            break;
        case 'deleteChannel':
            component = <DeleteChannelContainer/>
            break;
        case 'createChannel':
            component = <CreateChannelContainer/>
            break;
        case 'chooseOption':
            component = <NewServerContainer choice={"option"}/>;
            break;
        case 'createServer':
            component = <NewServerContainer choice={"create"} />;
            break;
        case 'joinServer':
            component = <NewServerContainer choice={"join"} />;
            break;
        case 'deleteServer':
            component = <DeleteServerContainer choice={"delete"}/>
            break;
        case 'leaveServer':
            component = <DeleteServerContainer choice={"leave"}/>
            break;
        case 'inviteFriends':
            component = <DeleteServerContainer choice={"invite"}/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
