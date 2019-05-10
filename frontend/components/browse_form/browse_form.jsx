import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "../chatroom/chatroom_container"

class BrowseForm extends React.Component {

    constructor(props){
        super(props);
        this.listServers = this.listServers.bind(this)
        this.channelHeader = this.channelHeader.bind(this)
        this.findServer = this.findServer.bind(this)
        this.state = {servers: {}}
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
    }
 
    listServers() {
        return( 
            <ul className="server-list">
                {Object.values(this.state.servers).map((server) => {
                    if (server.id === this.props.serverId){
                        return (
                            <div className="button-group" key={server.id}>
                                <div className="selected-circleThing" />
                                <li>
                                    <Link className="selected-server-link" to={`/browse/${server.id}`} >
                                        <span>{server.name[0]}</span>
                                    </Link>
                                </li>
                            </div>
                        )
                    } else{
                        return(
                            <div className="button-group" key={server.id}>
                                <div className="circleThing" />
                                <li>
                                    <Link className="server-link" to={`/browse/${server.id}`} >
                                        <span>{server.name[0]}</span>
                                    </Link>
                                </li>
                            </div>
                        )
                    }
                })}
            </ul>
        )
    }

    isHome() {
        if (this.props.serverId){
            return false;
        }
        return true;
    }

    findServer(){
        let that = this;
        let currentServer;
        this.props.servers.forEach (server => {
            if (server.id === that.props.serverId){
                currentServer = server;
            }
        })
        if (currentServer)
            return currentServer;
        else
            return [];
    }

    showDropdown(){
        document.getElementById("dropdown").classList.toggle("show")
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside (event) {
        if (event.target.innerText != 'Delete Server' && event.target.innerText != 'Leave Server' && event.target.innerText != 'Invite Friends') {
            this.closeDropdown();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }

    closeDropdown(){
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

    inviteSelection(){
        this.closeDropdown();
        this.props.openModal('inviteFriends');
    }

    leaveSelection() {
        this.closeDropdown();
        this.props.openModal('leaveServer');
    }

    channelHeader(){
        

        if (this.isHome()){
            return(
                <div className="header-content">
                    <span>Hello, {this.props.username}</span>
                </div>
            )
        }
        else{
            let firstSelection;

            firstSelection = <div className="invite-div" onClick={() => this.inviteSelection()}>
                <i className="fas fa-users"></i>
                <p>Invite Friends</p>
            </div>

            

            let secondSelection;
            
            if (this.props.current_user[0].id === this.findServer().owner_id){
                secondSelection = <div className="delete-div" onClick={() => this.deleteSelection()}>
                    <i className="fas fa-trash-alt"></i>
                    <p>Delete Server</p>
                </div>
            } else{
                secondSelection = <div className="delete-div" onClick={() => this.leaveSelection()}>
                    <i className="fas fa-sign-out-alt"></i>
                    <p>Leave Server</p>
                </div>
            }

            if (this.props.servers.length > 0){
                return(
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

    componentDidMount() {
        this.props.fetchServers().then(()=>this.setState({servers: this.props.servers}))
        this.props.fetchUsersServers()
    }

    componentDidUpdate(prevProps){
        if (Object.keys(prevProps.servers).length !== Object.keys(this.props.servers).length) {
            this.setState({servers: this.props.servers})
        }
    }

    componentWillUnmount(){
        
    }
    
    addChat(){
        if (!this.isHome()){
            return(
                < ChatRoom />
            )
        }
    }

    render(){
        if (!this.props.servers) return null

        return (
            <div className="browseForm">
                <div className = "side-nav">
                    <div className = "server-container">
                        <div className="button-group">
                            <div className="circleThing" />
                            <Link className="home-link" to="/browse">
                                <i className="fas fa-home"></i>
                            </Link>
                        </div>
                        <hr className="server-divider" width = "60%" />
                        {this.listServers()}
                        <hr className="server-divider" width="60%" />
                        <div className="button-group">
                            <div className="circleThing" />
                            <button className="add-button" onClick={() => this.props.openModal('chooseOption')}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        
                    </div>
                    <div className = "channel-container">
                        {this.channelHeader()}
                        <div className="logoutButton">
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                        <hr className="channel-divider" />
                    </div>
                </div>
                <div className = "main-content">
                    <div className="content-header"> </div>
                    <hr className="content-divider" width="100%" />
                    {this.addChat()}
                </div>
                
            </div>
        )
    }
}

export default BrowseForm;
