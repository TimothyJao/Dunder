import React from "react";
import { Link }  from "react-router-dom";


const Home = () => {



    return(
        <>
            <nav>
                <div className="main-nav">
                    <Link to="/" className="header-link">
                        <h1 className="header-link">Erised</h1>
                    </Link>
                </div>

                <div className="right-nav">
                    <Link className = "nav-button" to="/login">Login</Link>
                    <p> | </p>
                    <Link className="nav-button" to="/signup">Sign Up</Link>
                    
                </div>
            </nav>
            <header>
                <div className="header-text">
                    <p className="big"> It's time to ditch Skype and Teamspeak </p>
                    <p className="small">
                        All-in-one voice and text chat for gamers that's free, secure, and
                        works on both your desktop and phone. Stop paying for TeamSpeak
                        servers and hassling with Skype. Simplify your life.
                    </p>
                </div>
                <button className="signup">Sign Up</button>
                <button className="guest">Log in as guest</button>
            </header>
            <section className="img-section">
                <img className="main-img" src={window.images.background} />
            </section>
            <footer>
                
            </footer>
        </>         
    )  
}                           
               
export default Home;
