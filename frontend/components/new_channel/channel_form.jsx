import React from "react";
import { withRouter, Link } from "react-router-dom";

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            server_id: props.serverId,
        };
        this.createChannel = this.createChannel.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleCreateSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);
        this.props.createChannel(channel).then((data) => {
            this.props.closeModal();
            this.props.history.push(`/browse/${this.props.serverId}/${data.currentChannel.channel.id}`);
        });
    }

    // handleJoinSubmit(e) {
    //     e.preventDefault();
    //     this.state.url = this.state.url.slice(-6);
    //     const server = Object.assign({}, this.state);
    //     this.props.createUserServer(server).then((server) => {
    //         this.props.closeModal();
    //         this.props.history.push(`/browse/${server.userServer.server_id}`);
    //     });
    // }

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

    createChannel(){
        return(
            <div className="server-box">
                <div className="create-top">
                    <p className="CYS"> CREATE A CHANNEL</p>
                    <div className="welcome">
                        {this.props.welcomeMessage}
                        {this.renderErrors()}
                    </div>
                    <div className="create-header">
                        <p className="blahblah"> Create a channel in this server to talk</p>
                        <p className="blahblah">to your friends about any topic you want.</p>
                    </div>
                    <form className="create-form" onSubmit={this.handleCreateSubmit}>
                        <label className="server-name">CHANNEL NAME <br />
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>
                        <br />
                        <input className="server-submit" type="submit" value={"Create Channel"} />
                    </form>
                    <div className="BACK" onClick={()=>this.props.openModal('chooseOption')}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <p>BACK</p>
                    </div>
                        
                </div>
            </div>
        )
    }

    
    render() {
        return (
            <>
                {this.createChannel()}
            </>
        )
    }
}

export default ChannelForm;
