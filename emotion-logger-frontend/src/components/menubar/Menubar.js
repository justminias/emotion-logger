import logo from "./Emotion-2.png";
import {Link} from "react-router-dom";
import './Menubar.css';

export const Menubar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <a className="navbar-item">
                        <img src={logo} alt={logo}/>
                    </a>
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a href="#emotions"
                       className="navbar-item hoverable is-size-5 has-text-weight-semibold">Emotions</a>
                    <a href="#statistics"
                       className="navbar-item hoverable is-size-5 has-text-weight-semibold">Statistics</a>
                    <Link to="/log-emotion">
                        <a className="navbar-item">
                            <button className="button red-button has-text-weight-semibold">Log emotion +</button>
                        </a>
                    </Link>
                </div>

                <div className="navbar-end pr-6">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#account" className="navbar-link is-size-5 has-text-weight-semibold">Account</a>

                        <div className="navbar-dropdown">
                            <a href="#about" className="navbar-item">About</a>
                            <a href="#jobs" className="navbar-item">Jobs</a>
                            <a href="#contact" className="navbar-item">Contact</a>
                            <hr className="navbar-divider"/>
                            <a href="#report" className="navbar-item">Report an issue </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}