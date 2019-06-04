import React from "react";
import { withRouter, Link } from "react-router-dom";

class DMForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: props.sender_id,
            recipient: "",
        };
        this.createDM = this.createDM.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleCreateSubmit(e) {
        e.preventDefault();
        this.props.createDM(this.state.sender, this.state.recipient).then((data) => {
            this.props.closeModal();
            this.props.history.push(`/browse/DMs/${data.currentChannel.channel.id}`);
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

    createDM(){
        return(
            <div className="server-box">
                <div className="create-top">
                    <p className="CYS"> SEND A DIRECT MESSAGE</p>
                    <div className="welcome">
                        {this.props.welcomeMessage}
                        {this.renderErrors()}
                    </div>
                    <div className="create-header">
                        <p className="blahblah"> Send a direct message to another user. No one else</p>
                        <p className="blahblah"> can see this message except for you and the recipient.</p>
                    </div>
                    <form className="create-form" onSubmit={this.handleCreateSubmit}>
                        <label className="server-name">RECIPIENT NAME <br />
                            <input type="text" value={this.state.recipient} onChange={this.update('recipient')} />
                        </label>
                        <br />
                        <input className="server-submit" type="submit" value={"Create Channel"} />
                    </form>
                        
                </div>
            </div>
        )
    }

    
    render() {
        return (
            <>
                {this.createDM()}
            </>
        )
    }
}

export default DMForm;
