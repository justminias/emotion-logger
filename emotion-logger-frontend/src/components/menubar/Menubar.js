import logo from "./Emotion-2.png";
import {Link} from "react-router-dom";
import './Menubar.css';

const UserMenubar = () => {

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/main">
                    <img src={logo} alt={logo}/>
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a href="#emotions"
                       className="navbar-item hoverable is-size-5 has-text-weight-semibold">Emotions</a>
                    <a href="#statistics"
                       className="navbar-item hoverable is-size-5 has-text-weight-semibold">Statistics</a>
                    <Link className="navbar-item" to="/main/log-emotion">
                        <button className="button red-button has-text-weight-semibold">Log emotion +</button>
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
                            <a href="/logout" className="navbar-item navbar-item-logout has-text-weight-bold">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const EmptyMenubar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/login">
                    <img src={logo} alt={logo}/>
                </Link>
            </div>
        </nav>);
}

const Menubar = {
    UserMenubar,
    EmptyMenubar
}

export default Menubar;