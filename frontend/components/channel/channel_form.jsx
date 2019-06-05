import React from "react";
import { withRouter, Link } from "react-router-dom";

class channelForm extends React.Component {
    constructor(props) {
        super(props);
        this.channelHeader = this.channelHeader.bind(this)
        this.findServer = this.findServer.bind(this)
        this.state = { channels: {} }
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.listChannels = this.listChannels.bind(this);
    }

    isHome() {
        if (this.props.serverId) {
            return false;
        }
        return true;
    }

    findServer() {
        let that = this;
        let currentServer;
        this.props.servers.forEach(server => {
            if (server.id === that.props.serverId) {
                currentServer = server;
            }
        })
        if (currentServer)
            return currentServer;
        else
            return [];
    }
    
    showDropdown() {
        document.getElementById("dropdown").classList.toggle("show")
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (event.target.innerText != 'Delete Server' && event.target.innerText != 'Leave Server' && event.target.innerText != 'Invite Friends') {
            this.closeDropdown();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    closeDropdown() {
        var dropdowns = document.getElementsByClassName("server-dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    deleteSelection() {
        this.closeDropdown();
        this.props.openModal('deleteServer');
    }

    inviteSelection() {
        this.closeDropdown();
        this.props.openModal('inviteFriends');
    }

    leaveSelection() {
        this.closeDropdown();
        this.props.openModal('leaveServer');
    }

    channelHeader() {


        if (this.isHome()) {
            return (
                <div className="header-content">
                    <span>Hello, {this.props.username}</span>
                </div>
            )
        }
        else {
            let firstSelection;

            firstSelection = <div className="invite-div" onClick={() => this.inviteSelection()}>
                <i className="fas fa-users"></i>
                <p>Invite Friends</p>
            </div>



            let secondSelection;

            if (this.props.currentUser[0].id === this.findServer().owner_id) {
                secondSelection = <div className="delete-div" onClick={() => this.deleteSelection()}>
                    <i className="fas fa-trash-alt"></i>
                    <p>Delete Server</p>
                </div>
            } else {
                secondSelection = <div className="delete-div" onClick={() => this.leaveSelection()}>
                    <i className="fas fa-sign-out-alt"></i>
                    <p>Leave Server</p>
                </div>
            }

            if (this.props.servers.length > 0) {
                return (
                    <>
                        <div className="header-content" onClick={this.showDropdown}>
                            <span>{this.findServer().name}</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div id="dropdown" className="server-dropdown">
                            {firstSelection}
                            {secondSelection}
                        </div>
                    </>
                )
            }
        }
    }

    listChannels() {
        if (this.isHome()) {
            let currentId = this.props.currentUser[0].id
            let name;
            return (
                <>
                    <div className="channel-list-header">
                        <span className="CHANNELS">DIRECT MESSAGES</span>
                        <i className="fa fa-plus" onClick={() => this.props.openModal('createDM')}></i>
                    </div>
                    <ul className="channel-list">
                        {Object.values(this.state.channels).map((channel) => {
                            if(!channel.sender) return null;
                            if(currentId === channel.recipient.id){name = channel.sender.username;} 
                            else if (currentId === channel.sender.id){name = channel.recipient.username;}
                            if (channel.id === this.props.channelId){
                                return (
                                    <li className="channel-group-selected" key={channel.id}>
                                        <Link className="channel-link-selected" to={`/browse/DMs/${channel.id}`} >
                                            <i className="fas fa-at"></i>
                                            <span className="channel-name-selected">{name}</span>
                                            <i className="fas fa-trash-alt" onClick={() => this.props.openModal('deleteChannel')}></i>
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="channel-group" key={channel.id}>
                                        <Link className="channel-link" to={`/browse/DMs/${channel.id}`} >
                                            <i className="fas fa-at"></i>
                                            <span className="channel-name">{name}</span>
                                            <i className="fas fa-trash-alt" onClick={() => this.props.openModal('deleteChannel')}></i>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </>
            )
        } else{
            let ownerAdd = <></>;
            let ownerTrash = <></>;
            let currentId = this.props.currentUser[0].id;
            let ownerId = this.findServer().owner_id;
            if (currentId === ownerId){
                ownerAdd = <i className="fa fa-plus" onClick={() => this.props.openModal('createChannel')}></i>;
                ownerTrash = <i className="fas fa-trash-alt" onClick={() => this.props.openModal('deleteChannel')}></i>;
            }
            return (
                <>
                    <div className="channel-list-header">
                        <span className="CHANNELS">CHANNELS</span>
                        {ownerAdd}
                    </div>
                    <ul className="channel-list">
                        {Object.values(this.state.channels).map((channel) => {
                            if(currentId === ownerId && channel.name != "general"){
                                ownerTrash = <i className="fas fa-trash-alt" onClick={() => this.props.openModal('deleteChannel')}></i>;
                            } else{
                                ownerTrash = <></>
                            }
                            if (channel.id === this.props.channelId) {
                                return (
                                    <li className="channel-group-selected" key={channel.id}>
                                        <Link className="channel-link-selected" to={`/browse/${this.props.serverId}/${channel.id}`} >
                                            <i className="fas fa-hashtag"></i>
                                            <span className="channel-name-selected">{channel.name}</span>
                                            {ownerTrash}
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="channel-group" key={channel.id}>
                                        <Link className="channel-link" to={`/browse/${this.props.serverId}/${channel.id}`} >
                                            <i className="fas fa-hashtag"></i>
                                            <span className="channel-name">{channel.name}</span>
                                            {ownerTrash}
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </>
            )
        }
    }

    componentDidMount() {
        if (this.isHome()) {
            this.props.fetchDMs(this.props.currentUser[0].id).then((DMs) => this.setState({ channels: DMs.channels }))
        } else{
            this.props.fetchChannels(this.props.serverId).then(() => this.setState({ channels: this.props.channels }))
        }
    }

    componentDidUpdate(prevProps) {
        let prevServer;
        let currentServer;
        if (isNaN(prevProps.serverId)){prevServer = -1;} 
        else{prevServer = prevProps.serverId;}
        if (isNaN(this.props.serverId)) {currentServer = -1;} 
        else {currentServer = this.props.serverId;}
        if (Object.keys(prevProps.channels).length !== Object.keys(this.props.channels).length) {
            this.setState({ channels: this.props.channels })
        }else if (prevServer != currentServer){
            if (this.isHome()){
                this.props.fetchDMs(this.props.currentUser[0].id).then((DMs) => { this.setState({ channels: DMs.channels})})
            } else {
                this.props.fetchChannels(this.props.serverId).then(() => this.setState({ channels: this.props.channels }))
            }
        }
    }

    componentWillUnmount() {
        this.setState({channels: {}})
    }

    render() {
        return (
            <div className = "channel-holder">
                {this.channelHeader()}
                {this.listChannels()}
            </div>
        )
    }
}

export default channelForm;
