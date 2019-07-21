import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "../chatroom/chatroom_container"
import Servers from "../server/server_form_container"
import Channels from "../channel/channel_form_container"
import Search from "../search/search_container"

class BrowseForm extends React.Component {

    constructor(props){
        super(props);
    }

    isHome() {
        if (this.props.channelId) {
            return false;
        }
        return true;
    }
    
    addChat(){
        if (!this.isHome()){
            return(
                < ChatRoom />
            )
        }
    }

    addWelcome(){
        if (this.isHome()) {
            return(
                <div className = "welcome-message">
                    <p className = "welcome-header"> Welcome to Dunder! </p>
                    <p className = "welcome-body"> Feel free to browse servers and channels, message other members, and create or delete anything you want! </p>
                </div>
            )
        }
    }

    render(){
        return (
            <div className="browseForm">
                <div className = "side-nav">
                    <div className = "server-container">
                        < Servers />
                    </div>
                    <div className = "channel-container">
                        < Channels />
                        
                        <hr className="channel-divider" />
                    </div>
                </div>
                <div className = "main-content">
                    <div className="content-header"> 
                        <div className="logoutButton">
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
                    <hr className="content-divider" width="100%" />
                    {this.addWelcome()}
                    {this.addChat()}
                </div>
                <div className="search-bar" >

                    < Search />
                    <hr className="content-divider" width="100%" />
                </div>
            </div>
        )
    }
}

export default BrowseForm;
