import React from "react";
import { withRouter, Link } from "react-router-dom";

class GuestForm extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = document.querySelector("#dunder-selector").value
        const user = {
            username: name,
            password: name
        };
        this.props.processForm(user).then(() => this.props.history.push('/browse'), () => this.props.history.push(`/${this.props.formType}`));
    }

    

    render() {
        return (
            <>
                <section className="session-form">
                    <div className="index-link">
                        <Link to="/" className="header-link">
                            <h1 className="header-link">Erised</h1>
                        </Link>
                    </div>
                    <div className="guest-box">
                        <div className="guest-welcome">
                            <>
                                <h3>Welcome Guest!</h3>
                                <p>Please select an employee</p>
                            </>
                        </div>
                        <form onSubmit={this.handleSubmit} className="guest-form">
                            <select id="dunder-selector">
                                <option value="MichaelScott">Michael Scott</option>
                                <option value="JimHalpert">Jim Halpert</option>
                                <option value="DwightSchrute">Dwight Schrute</option>
                                <option value="PamelaBeesly">Pam Beesly</option>
                            </select>
                            <input className="submit" type="submit" value="login" />
                        </form>
                        {this.props.navLink}
                    </div>
                </section>
            </>
        )
    }
}

export default GuestForm;