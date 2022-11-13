import "./common.css";
import {EmotionSection} from "./components/emotion/EmotionSection";
import {FooterSection} from "./components/common/footer/FooterSection";
import {Menubar} from "./components/menubar/Menubar";
import {ChosenEmotionLog} from "./components/emotion/chosen/ChosenEmotionLog";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {EmptyEmotionLog} from "./components/emotion/empty/EmptyEmotionLog";
import {NewEmotionLog} from "./components/emotion/new/NewEmotionLog";
import Login from "./components/login/Login";
import {useState} from "react";
import {SelectedDateProvider} from "./contexts/SelectedDateContext";


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

    return (
        <SelectedDateProvider>
            <Router>
                <Route path="/">
                    <Menubar loggedIn={loggedIn}/>
                </Route>
                {loggedIn &&
                    <>
                        <Route exact path="/" component={Body}/>
                        <Route exact path="/log-emotion" component={NewEmotionLog}/>
                    </>
                }

                {!loggedIn &&
                    <Route exact path="/">
                        <Login setLoggedIn={setLoggedIn}/>
                    </Route>
                }
                <Route path="/" component={FooterSection}/>
            </Router>
        </SelectedDateProvider>

    );
}

export default App;