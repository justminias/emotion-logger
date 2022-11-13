import "./common.css";
import Menubar from "./components/menubar/Menubar";
import {FooterSection} from "./components/common/footer/FooterSection";
import {useEffect} from "react";
import AuthenticationService from "./services/authentication-service";
import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!AuthenticationService.isUserLoggedIn()) {
            navigate("/login");
        }
    })

    return (
        <>
            <Menubar.UserMenubar/>
            <Outlet/>
            <FooterSection/>
        </>
    );

}

export default Home;