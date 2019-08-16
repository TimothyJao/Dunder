import React from "react";
import { withRouter, Link } from "react-router-dom";

class deleteServerForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.serverId = parseInt(props.location.pathname.split('/')[2])
    }

    deleteLeave(header, message, deleteLeaveFunction, button){
        return (
            <>
                <div className="delete-leave">
                    <div className="delete-leave-header">
                        <h3 className="header-print">{header}</h3>
                    </div>
                    <div className="delete-leave-message">
                        <p className="message-print">{message}</p>
                    </div>

                    <div className="delete-leave-selection">
                        <div className="dl-cancel" onClick={() => this.props.closeModal()}>
                            <p>Cancel</p>
                        </div>
                        <div className="dl-dl" onClick={deleteLeaveFunction}>
                            <p>{button}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    fullDeleteServer() {
        this.props.deleteServer(this.serverId).then(() => this.props.history.push('/browse'))
        this.props.closeModal();
    }

    delete(){
        let header = <>DELETE '{this.props.servers[this.serverId].name.toUpperCase()}'</>
        let message =   <>Are you sure you want to delete <span> </span>
                            <span className="dl-server-name">{this.props.servers[this.serverId].name.toUpperCase()}</span>
                            ? You will lose all the channels and messages you have created.
                        </>
        let deleteFunction = () => this.fullDeleteServer(this.serverId)
        let button = <>Delete Server</>

        return(
            this.deleteLeave(header, message, deleteFunction, button)
        )
    }

    findUserServer(){
        let findUserServer;
        Object.values(this.props.usersServers).forEach( userServer => {
            if(userServer.server_id === this.serverId) findUserServer = userServer;
        })
        return findUserServer
    }

    fullLeaveServer() {
        this.props.leaveServer(this.findUserServer(this.serverId)).then(() => this.props.history.push('/browse'))
        this.props.closeModal();
    }

    leave() {
        let header = <>LEAVE '{this.props.servers[this.serverId].name.toUpperCase()}'</>
        let message = <>Are you sure you want to leave <span> </span>
                            <span className="dl-server-name">{this.props.servers[this.serverId].name.toUpperCase()}</span>
                            ? You won't be able to rejoin this server unless you are re-invited.
                      </>
        let deleteFunction = () => this.fullLeaveServer(this.serverId)
        let button = <>Leave Server</>

        return (
            this.deleteLeave(header, message, deleteFunction, button)
        )
    }

    invite() {
        return (
            <>
                <div className="delete-leave">
                    <div className="invite-header">
                        <h3 className="header-print">INVITE FRIENDS TO '{this.props.servers[this.serverId].name.toUpperCase()}'</h3>
                    </div>
                    <div className="invite-message">
                        <p className="message-print"> Share this code with others to grant access to this server </p>
                    </div>

                    <div className="invite-selection">
                        <p>h{this.props.servers[this.serverId].url}</p>
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
        
    
