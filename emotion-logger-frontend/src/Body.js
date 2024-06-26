import "./common.css";
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

export default Body;