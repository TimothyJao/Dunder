import React from "react";
import { withRouter, Link } from "react-router-dom";

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.listServers = this.listServers.bind(this)
        this.state = { servers: {}}
    }

    isHome() {
        if (this.props.serverId) {
            return false;
        }
        return true;
    }

    listServers() {
        return (
            <ul className="server-list">
                {Object.values(this.state.servers).map((server) => {
                    if (server.id === this.props.serverId) {
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
                    } else {
                        return (
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
    
    componentDidMount() {
        this.props.fetchServers().then(() => this.setState({ servers: this.props.servers }))
        if(!this.isHome()) this.props.fetchUsersServers()
    }

    componentDidUpdate(prevProps) {
        if (Object.keys(prevProps.servers).length !== Object.keys(this.props.servers).length) {
            this.setState({ servers: this.props.servers })
        }
    }

    render() {
        return (
            <div className = "server-holder">
                <div className="button-group">
                    <div className="circleThing" />
                    <Link className="home-link" to="/browse">
                        <i className="fas fa-home"></i>
                    </Link>
                </div>
                <hr className="server-divider" width="60%" />
                { this.listServers() }
                <hr className="server-divider" width="60%" />
                <div className="button-group">
                    <div className="circleThing" />
                    <button className="add-button" onClick={() => this.props.openModal('chooseOption')}>
                        <i className="fa fa-plus"></i>
                    </button>    
                </div>
            </div>
        )
    }
}

export default ServerForm;
