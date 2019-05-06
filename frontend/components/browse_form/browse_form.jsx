import React from "react";
import { Link } from "react-router-dom";

class BrowseForm extends React.Component {

    constructor(props){
        super(props);
        this.listServers = this.listServers.bind(this)
        this.channelHeader = this.channelHeader.bind(this)
        this.findServer = this.findServer.bind(this)
        this.state = {servers: {}}
    }
 
    listServers() {
        return( 
            <ul className="server-list">
                {Object.values(this.state.servers).map((server) => {
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
        return currentServer;
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
            if (this.props.servers.length > 0){
                return(
                    <div className="header-content">
                        <span>{this.findServer().name}</span>
                    </div>
                )
            }
        }
    }

    componentDidMount() {
        this.props.fetchServers().then(()=>this.setState({servers: this.props.servers}))
    }

    componentDidUpdate(prevProps){
        if (Object.keys(prevProps.servers).length !== Object.keys(this.props.servers).length) {
            this.setState({servers: this.props.servers})
        }
    }

    render(){
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
                        <hr className="channel-divider" />
                    </div>
                </div>
                <div className = "main-content">
                </div>
                <div className="logoutButton">
                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                </div>
                
            </div>
        )
    }
}

export default BrowseForm;
