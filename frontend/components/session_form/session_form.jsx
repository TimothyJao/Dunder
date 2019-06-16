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
        this.props.processForm(user).then(()=>this.props.history.push('/browse'), ()=>this.props.history.push(`/${this.props.formType}`));
    }

    componentWillUnmount(){
        this.props.clearSessionErrors()
    }

    renderErrors() {
        if (Object.keys(this.props.errors).length != 0){
            return (
                <ul className = "errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`} className = "errorMessage">
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
                <section className = "session-form">
                    <div className="index-link">
                        <Link to="/" className="header-link">
                            <h1 className="header-link">Dunder</h1>
                        </Link>
                    </div>
                    <div className="login-box">
                        <div className="welcome">
                            {this.props.welcomeMessage}
                            {this.renderErrors()}
                        </div>
                        <div className="user-auth-form">
                            <form onSubmit={this.handleSubmit}>
                                <label className="username">Username <br />
                                    <input className = "user-input" type="text" value={this.state.username} onChange={this.update('username')} />
                                </label>
                                <br />
                                <label className="password">Password <br />
                                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                                </label>
                                <br />
                                <input className="submit" type="submit" value={this.props.formType} />
                            </form>
                        </div>
                        <div className = "switch-container">
                            {this.props.navLink}
                        </div>
                        
                    </div>
                </section>
            </>
        )
    }
}

export default SessionForm;
