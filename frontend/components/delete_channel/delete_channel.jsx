import React from "react";
import { withRouter, Link } from "react-router-dom";

class deleteChannelForm extends React.Component {

    constructor(props){
        super(props);
    }

    fullDeleteChannel(channelId){
        if (this.props.serverId) { this.props.deleteChannel(channelId).then(() => this.props.history.push(`/browse/${this.props.serverId}`))}
        else { this.props.deleteChannel(channelId).then(() => this.props.history.push(`/browse`))}
        
        this.props.closeModal();
    }

    delete(){
        
        return(
            <>  
                <div className="delete-leave">
                    <div className="delete-leave-header">
                        <h3 className="header-print">DELETE '{this.props.channels[this.props.channelId].name.toUpperCase()}'</h3>
                    </div>
                    <div className="delete-leave-message">
                        <p className="message-print">Are you sure you want to delete <span> </span>
                            <span className="dl-server-name">{this.props.channels[this.props.channelId].name.toUpperCase()}</span>
                            ? You will lose all messages you have created.
                    </p>
                    </div>

                    <div className="delete-leave-selection">
                        <div className="dl-cancel" onClick={() => this.props.closeModal()}>
                            <p>Cancel</p>
                        </div>
                        <div className="dl-dl" onClick={() => this.fullDeleteChannel(this.props.channelId)}>
                            <p>Delete Channel</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    render() {

        return (
            <>
                {this.delete()}
            </>
        )
    }
}

export default deleteChannelForm;
        
    
