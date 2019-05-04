import React from "react";
import { Link } from "react-router-dom";

const  BrowseForm= (props) => {
    
    const listServers = (props) => {
        return( 
            <ul>
                {props.servers.map((server) => {
                    
                    <div className="button-group">
                        <div className="circleThing" />
                        <li>
                            <Link className="server-link" to={`/browse/${server.id}`} />
                        </li>
                    </div>
                })}
            </ul>
        )
    }

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
                    <hr className="home-divider" width = "60%" />
                    {listServers(props)}
                    <hr className="home-divider" width="60%" />
                    <div className="button-group">
                        <div className="circleThing" />
                        <button className="add-button" onClick={() => props.openModal('createServer')}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    
                </div>
                <div className = "channel-container">
                    YEEEEEET
                </div>
            </div>
            <div className = "main-content">
            </div>
            <div className="logoutButton">
                <button className="header-button" onClick={props.logout}>Log Out</button>
            </div>
            
        </div>
    )
}

export default BrowseForm;
