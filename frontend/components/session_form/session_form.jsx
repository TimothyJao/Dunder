import React from "react";
import { withRouter, Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul className = "errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <>
                <section className = "session-form">
                    <div className="login-box">
                        <div className="welcome">
                            <h3>Welcome back!</h3>
                            <p>We're so excited to see you again!</p>
                            {this.renderErrors()}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label className="username">Username <br />
                                <input type="text" value={this.state.username} onChange={this.update('username')}/>
                            </label>
                            <br />
                            <label className="password">Password <br />
                                <input type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <br />
                            <input className="submit" type="submit" value={this.props.formType} />
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default SessionForm;
