import React from "react";
import { withRouter, Link } from "react-router-dom";

class deleteServerForm extends React.Component {
    
    fullDeleteServer(serverId){
        this.props.deleteServer(serverId).then(() => this.props.history.push('/browse'))
        this.props.closeModal();
    }

    delete(){
        let serverId = parseInt(this.props.location.pathname.split('/')[2])
        return(
            <>  
                <div className="delete-leave">
                    <div className="delete-leave-header">
                        <h3 className="header-print">DELETE '{this.props.servers[serverId].name.toUpperCase()}'</h3>
                    </div>
                    <div className="delete-leave-message">
                        <p className="message-print">Are you sure you want to delete <span> </span>
                            <span className="dl-server-name">{this.props.servers[serverId].name.toUpperCase()}</span>
                            ? You will lose all the channels and messages you have created.
                    </p>
                    </div>

                    <div className="delete-leave-selection">
                        <div className="dl-cancel" onClick={() => this.props.closeModal()}>
                            <p>Cancel</p>
                        </div>
                        <div className="dl-dl" onClick={() => this.fullDeleteServer(serverId)}>
                            <p>Delete Server</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    findUserServer(serverId){
        let findUserServer;
        Object.values(this.props.usersServers).forEach( userServer => {
            if(userServer.server_id === serverId)
                findUserServer = userServer;
        })
        return findUserServer
    }

    fullLeaveServer(serverId) {
        
        this.props.leaveServer(this.findUserServer(serverId)).then(() => this.props.history.push('/browse'))
        this.props.closeModal();
    }

    leave() {
        let serverId = parseInt(this.props.location.pathname.split('/')[2])
        return (
            <>
                <div className="delete-leave">
                    <div className="delete-leave-header">
                        <h3 className="header-print"> LEAVE '{this.props.servers[serverId].name.toUpperCase()}'</h3>
                    </div>
                    <div className="delete-leave-message">
                        <p className="message-print">Are you sure you want to leave <span> </span>
                            <span className="dl-server-name">{this.props.servers[serverId].name.toUpperCase()}</span>
                            ? You won't be able to rejoin this server unless you are re-invited.
                    </p>
                    </div>

                    <div className="delete-leave-selection">
                        <div className="dl-cancel" onClick={() => this.props.closeModal()}>
                            <p>Cancel</p>
                        </div>
                        <div className="dl-dl" onClick={() => this.fullLeaveServer(serverId)}>
                            <p>Leave Server</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    invite() {
        let serverId = parseInt(this.props.location.pathname.split('/')[2])
        return (
            <>
                <div className="delete-leave">
                    <div className="invite-header">
                        <h3 className="header-print">INVITE FRIENDS TO '{this.props.servers[serverId].name.toUpperCase()}'</h3>
                    </div>
                    <div className="invite-message">
                        <p className="message-print"> Share this link with others to grant access to this server </p>
                    </div>

                    <div className="invite-selection">
                        <p>https://erised.com/{this.props.servers[serverId].url}</p>
                    </div>
                </div>
            </>
        )
    }

    render() {
        let choice;
        switch (this.props.choice) {
            case "delete":
                choice = this.delete();
                break;
            case "leave":
                choice = this.leave();
                break;
            case "invite":
                choice = this.invite();
        }

        return (
            <>
                {choice}
            </>
        )
    }
}

export default deleteServerForm;
        
    
