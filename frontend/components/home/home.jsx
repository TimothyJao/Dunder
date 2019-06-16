import React from "react";
import { Link }  from "react-router-dom";

const Home = (props) => {
    const authButtons = () => (
        <>
            <Link className="nav-button" to="/login">Login</Link>
            <p> | </p>
            <Link className="nav-button" to="/signup">Sign Up</Link>
        </>
    )

    const logoutButton = () => (   
        <>
            <button className="header-button" onClick={props.logout}>Log Out</button>
        </>
    )

    const redirectToGuest = () => (
        props.history.push("./guest")
    )

    const redirectBrowse = () => (
        props.history.push("./guest")
    )

    const loginGuest = () => (
        <>
            <button className="redirect-button" onClick={redirectToGuest}>Log in as guest</button>
        </>
    )

    const redirectToBrowse = () => (
        props.history.push("./browse")
    )
    
    const openBrowse = () => (
        <>
            <button className="redirect-button" onClick={redirectToBrowse}>Browse your servers</button>
        </>
    )

    const rightNav = props.currentUser ? logoutButton() : authButtons();
    const redirectButton = props.currentUser ? openBrowse() : loginGuest();

    return(
        <>
            <nav>
                <div className="main-nav">
                    <Link to="/" className="header-link">
                        <h1 className="header-link">Dunder</h1>
                    </Link>
                </div>

                <div className="right-nav">
                    {rightNav}
                </div>
            </nav>
            <header>
                <div className="header-text">
                    <p className="big"> It's time to ditch Skype and Slack </p>
                    <p className="small">
                        Text chat for office workers that's free, secure and fun. Stop paying for basic functions on Slack and hassling with Skype. Simplify your life.
                    </p>
                </div>
                {redirectButton}
            </header>
            <section className="img-section">
                <img className="main-img" src={window.images.background} />
            </section>
            <hr className="footer-divider top" width="80%" />
            <footer className="links-container">
                <i className="fas fa-envelope"></i>
                <a href="https://github.com/TimothyJao"><i className="fab fa-github" /> </a>
                <a href="https://www.linkedin.com/in/timothy-jao-670718b5/"><i className="fab fa-linkedin" /></a>
            </footer>
            <hr className="footer-divider bottom" width="80%" />
        </>         
    )  
}                           
               
export default Home;
