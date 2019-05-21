import React from "react";
import { withRouter, Link } from "react-router-dom";
import ReactTyped from 'react-typed'

//Typed: https://mattboldt.com/demos/typed-js/
//ReactTyped: https://github.com/ssbeefeater/react-typed

class GuestForm extends React.Component {
    
    constructor(props){
        super(props);
        this.endGuest = this.endGuest.bind(this)
    }

    endGuest (){
        this.props.processForm({ username: "harry.j.potter", password: "password" })
        this.props.history.push('/browse')
    }

    

    render() {

        setTimeout(this.endGuest, 11500)
        return (
            <>
                <section className="session-form">
                    <div className="index-link">
                        <Link to="/" className="header-link">
                            <h1 className="header-link">Erised</h1>
                        </Link>
                    </div>
                    <div className="login-box">
                        <div className="welcome">
                            <>
                                <h3>Welcome back!</h3>
                                <p>We're so excited to see you again!</p>
                            </>
                        </div>
                        <form>
                            <label className="username">Username <br />
                                <ReactTyped
                                    loop={false}
                                    loopCount={0}
                                    typeSpeed={70}
                                    startDelay={1000}
                                    backSpeed={20}
                                    backDelay={1}
                                    strings={["harry.j.potter"]}
                                    stopped={null}
                                    smartBackspace
                                    shuffle={false}
                                    fadeOut={false}
                                    fadeOutDelay={100}
                                    attr="placeholder"
                                    bindInputFocusEvents={false}
                                >
                                    <input type="text" />
                                </ReactTyped>
                            </label>
                            <br />
                            <label className="password">Password <br />
                                <ReactTyped
                                    loop={false}
                                    loopCount={0}
                                    typeSpeed={50}
                                    startDelay={3500}
                                    backSpeed={40}
                                    backDelay={300}
                                    strings={["malfoysuxgryffindorroolz", "••••••••••••••••••••••••"]}
                                    stopped={null}
                                    smartBackspace
                                    shuffle={false}
                                    fadeOut={false}
                                    fadeOutDelay={100}
                                    attr="placeholder"
                                    bindInputFocusEvents={false}
                                >
                                    <input type="password" />
                                </ReactTyped>
                            </label>
                            <br />
                            <input className="submit" type="submit" value="login" />
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default GuestForm;