import "./common.css";
import {EmotionSection} from "./components/emotion/EmotionSection";
import {FooterSection} from "./components/common/footer/FooterSection";
import {Menubar} from "./components/menubar/Menubar";
import {ChosenEmotionLog} from "./components/emotion/chosen/ChosenEmotionLog";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {EmptyEmotionLog} from "./components/emotion/empty/EmptyEmotionLog";
import {NewEmotionLog} from "./components/emotion/new/NewEmotionLog";


const Body = () => {

    const currentEmotionLog = useSelector(store => store.chosenLog);

    return (
        <div className="columns block mr-6 pb-6">
            <div className="column is-4 pt-6 pl-6">
                <EmotionSection/>
            </div>
            <div className="column is-8 pt-6 pl-6">
                { currentEmotionLog !== null ? <ChosenEmotionLog /> : <EmptyEmotionLog/>}
            </div>
        </div>
    )
}

const App = () => {

    return (
        <Router>
            <Route path="/" component={Menubar}/>
            <Route exact path="/" component={Body}/>
            <Route exact path="/log-emotion" component={NewEmotionLog}/>
            <Route path="/" component={FooterSection}/>
        </Router>
    );
}

export default App;