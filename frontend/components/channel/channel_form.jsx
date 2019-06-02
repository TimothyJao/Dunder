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

            if (this.props.current_user[0].id === this.findServer().owner_id) {
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
        return (
            <>
                <div className="channel-list-header">
                    <span className="CHANNELS">CHANNELS</span>
                    <i className="fa fa-plus" onClick={() => this.props.openModal('createChannel')}></i>
                </div>
                <ul className="channel-list">
                    {Object.values(this.state.channels).map((channel) => {
                        // if (channel.id === this.props.serverId) {
                        //     return (
                        //         <div className="button-group" key={server.id}>
                        //             <div className="selected-circleThing" />
                        //             <li>
                        //                 <Link className="selected-server-link" to={`/browse/${server.id}`} >
                        //                     <span>{server.name[0]}</span>
                        //                 </Link>
                        //             </li>
                        //         </div>
                        //     )
                        // } else {
                            return (
                                <li className="channel-group" key={channel.id}>
                                    <Link className="channel-link" to={`/browse/${this.props.serverId}/${channel.id}`} >
                                        <i className="fas fa-hashtag"></i>
                                        <span className="channel-name">{channel.name}</span>
                                        <i className="fas fa-trash-alt" onClick={()=>Window.alert("test")}></i>
                                    </Link>
                                </li>
                            )
                        }
                    )}
                </ul>
            </>
        )
    }

    componentDidMount() {
        this.props.fetchChannels(this.props.serverId).then(() => this.setState({ channels: this.props.channels }))
    }

    componentDidUpdate(prevProps) {
        if (Object.keys(prevProps.channels).length !== Object.keys(this.props.channels).length) {
            this.setState({ channels: this.props.channels })
        }
        if (prevProps.serverId != this.props.serverId){
            this.props.fetchChannels(this.props.serverId).then(() => this.setState({ channels: this.props.channels }))
        }
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
