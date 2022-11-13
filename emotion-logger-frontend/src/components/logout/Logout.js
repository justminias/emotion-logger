import AuthenticationService from "../../services/authentication-service";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        AuthenticationService.logout();
        navigate("/login")
    }, [])

}

export default Logout;