import "./common.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import {useEffect, useState} from "react";
import {SelectedDateProvider} from "./contexts/SelectedDateContext";
import Home from "./Home";
import AuthenticationService from "./services/authentication-service";
import Logout from "./components/logout/Logout";
import {NewEmotionLog} from "./components/emotion/new/NewEmotionLog";
import {useSelector} from "react-redux";
import {EmotionSection} from "./components/emotion/EmotionSection";
import {ChosenEmotionLog} from "./components/emotion/chosen/ChosenEmotionLog";
import {EmptyEmotionLog} from "./components/emotion/empty/EmptyEmotionLog";

const Body = () => {

    const currentEmotionLog = useSelector(store => store.chosenLog);

    return (
        <div className="columns block mr-6 pb-6">
            <div className="column is-4 pt-6 pl-6">
                <EmotionSection/>
            </div>
            <div className="column is-8 pt-6 pl-6">
                {currentEmotionLog !== null ? <ChosenEmotionLog/> : <EmptyEmotionLog/>}
            </div>
        </div>
    )
}

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(AuthenticationService.isUserLoggedIn());
    })

    return (
        <SelectedDateProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Home />}>
                        <Route path="" element={<Body />} />
                        <Route path="log-emotion" element={<NewEmotionLog />} />
                    </Route>
                    <Route path="/login" element={<Login /> } />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </SelectedDateProvider>
    );
}

export default App;