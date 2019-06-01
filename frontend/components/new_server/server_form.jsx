import React from "react";
import { withRouter, Link } from "react-router-dom";

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            owner_id: props.id,
            url: ""
        };
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
        this.handleJoinSubmit = this.handleJoinSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleCreateSubmit(e) {
        e.preventDefault();
        const server = Object.assign({}, this.state);
        this.props.createServer(server).then((result) => {
            this.props.closeModal();
            this.props.history.push(`/browse/${result.payload.server.id}`);
        });
    }

    handleJoinSubmit(e) {
        e.preventDefault();
        this.state.url = this.state.url.slice(-6);
        const server = Object.assign({}, this.state);
        this.props.createUserServer(server).then((server) => {
            this.props.closeModal();
            this.props.history.push(`/browse/${server.userServer.server_id}`);
        });
    }

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className="errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    switchToCreate(){
        this.props.openModal('create')
    }

    serverOption(){
        return(
            <div className="server-box">
                <p className="OH"> OH, ANOTHER SERVER HUH?</p>
                <div className="selections">
                    <div className="selectOne" onClick={() => this.props.openModal('createServer')}>
                        <h3 className="create">CREATE</h3>
                        <p className="description">Create a new server and invite your friends. It's free!</p>
                        <div className="icon-holder">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="create-button">
                            <p className="prompt">Create a server</p>
                        </div>
                    </div>
                    <div className="selectOne join-box" onClick={() => this.props.openModal('joinServer')}>
                        <h3 className="join">JOIN</h3>
                        <p className="description">Enter an Instant Invite and join your friend's server.</p>
                        <div className="icon-holder">
                            <i className="fas fa-sign-in-alt"></i>
                        </div>
                        <div className="join-button">
                            <p className="prompt">Join a server</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }

    createServer(){
        return(
            <div className="server-box">
                <div className="create-top">
                    <p className="CYS"> CREATE YOUR SERVER</p>
                    <div className="welcome">
                        {this.props.welcomeMessage}
                        {this.renderErrors()}
                    </div>
                    <div className="create-header">
                        <p className="blahblah"> By creating a server, you will have access to free voice</p>
                        <p className="blahblah">and text chat to use amongst your friends.</p>
                    </div>
                    <form className="create-form" onSubmit={this.handleCreateSubmit}>
                        <label className="server-name">SERVER NAME <br />
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>
                        <br />
                        <input className="server-submit" type="submit" value={"Create Server"} />
                    </form>
                    <div className="BACK" onClick={()=>this.props.openModal('chooseOption')}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <p>BACK</p>
                    </div>
                        
                </div>
            </div>
        )
    }

    joinServer() {
        return (
            <div className="server-box">
                <div className="create-top">
                    <p className="JAS"> JOIN A SERVER</p>
                    <div className="welcome">
                        {this.props.welcomeMessage}
                        {this.renderErrors()}
                    </div>
                    <div className="create-header">
                        <p className="blahblah"> Enter an Instant Invite below to join an existing</p>
                        <p className="blahblah">server. The invite will look something like this:</p>
                        <p className="example">https://erised.com/upEpNg</p> 
                    </div>
                    <form className="create-form" onSubmit={this.handleJoinSubmit}>
                        <label className="server-name">SERVER URL <br />
                            <input type="text" value={this.state.url} onChange={this.update('url')} />
                        </label>
                        <br />
                        <input className="server-join" type="submit" value={"Join Server"} />
                    </form>
                    <div className="BACK" onClick={() => this.props.openModal('chooseOption')}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <p>BACK</p>
                    </div>

                </div>
            </div>
        )
    }

    render() {
        let choice;
        switch(this.props.choice){
            case "option":
                choice=this.serverOption();
                break;
            case "create":
                choice = this.createServer();
                break;
            case "join":
                choice = this.joinServer();
        }

        return (
            <>
                {choice}
            </>
        )
    }
}

export default ServerForm;
