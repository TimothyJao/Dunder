import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "../chatroom/chatroom_container"
import Servers from "../server/server_form_container"
import Channels from "../channel/channel_form_container"

class BrowseForm extends React.Component {

    constructor(props){
        super(props);
    }
 
    

    

    
    
    // addChat(){
    //     if (!this.isHome()){
    //         return(
    //             < ChatRoom />
    //         )
    //     }
    // }

    render(){
        return (
            <div className="browseForm">
                <div className = "side-nav">
                    <div className = "server-container">
                        < Servers />
                    </div>
                    <div className = "channel-container">
                        < Channels />
                        <div className="logoutButton">
                            <button className="header-button" onClick={this.props.logout}>Log Out</button>
                        </div>
                        <hr className="channel-divider" />
                    </div>
                </div>
                <div className = "main-content">
                    <div className="content-header"> </div>
                    <hr className="content-divider" width="100%" />
                    {/* {this.addChat()} */}
                </div>
                
            </div>
        )
    }
}

export default BrowseForm;
