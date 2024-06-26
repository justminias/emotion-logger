import AuthenticationService from "../../services/authentication-service";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Menubar from "../menubar/Menubar";
import {FooterSection} from "../common/footer/FooterSection";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const inputLogin = document.getElementById("inputLogin")
        const inputPassword = document.getElementById("inputPassword")

        inputLogin.addEventListener("keypress", (event) => {
            if (event.key === 'Enter') {
                handleSubmit();
            }
        })
        inputPassword.addEventListener("keypress", (event) => {
            if (event.key === 'Enter') {
                handleSubmit();
            }
        })
    })

    const handleSubmit = () => {
        const login = document.getElementById("inputLogin").value.trim()
        const password = document.getElementById("inputPassword").value.trim()

        if (login === '' || password === '') {
            return;
        }

        AuthenticationService.executeBasicAuthenticationService(login, password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(login, password)
                navigate("/main");
            })
    }


    return (
        <>
            <Menubar.EmptyMenubar/>
            <div className="container p-6 m-6">
                <div className="columns">
                    <div className="field column is-4 is-offset-4">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input id="inputLogin" className="input is-normal" type="email" placeholder="Email"/>
                            <span className="icon is-left">
                        <i className="fas fa-envelope"/>
                    </span>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="field column is-4 is-offset-4">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input id="inputPassword" className="input is-normal" type="password"
                                   placeholder="Password"/>
                            <span className="icon is-left">
                        <i className="fas fa-lock"/>
                    </span>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <button className="button red-button is-normal" id="inputSubmit" onClick={handleSubmit}>Login
                        </button>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}

export default Login;