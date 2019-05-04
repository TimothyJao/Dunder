import React from "react";
import { withRouter, Link } from "react-router-dom";

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            owner_id: props.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(()=>this.props.closeModal()).then(() => this.props.history.push('/browse'));
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

    render() {
        return (
            <>
                
                <div className="login-box">
                    <div className="welcome">
                        {this.props.welcomeMessage}
                        {this.renderErrors()}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        
                        <label className="password">Server Name <br />
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>
                        <br />
                        <input className="submit" type="submit" value={"Create Server"}/>
                    </form>
                    <div className="switch-container">
                        {this.props.navLink}
                    </div>

                </div>
            </>
        )
    }
}

export default ServerForm;
