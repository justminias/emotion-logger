import {SolutionSection} from "../../solution/SolutionSection";
import {useHistory} from "react-router-dom";
import "./NewEmotionLog.css";

export const NewEmotionLog = () => {

    const history = useHistory();

    const handleSaveClick = () => {
        // todo: implement SAVE logic
        history.goBack();
    }

    return (
        <div className="columns">
            <div className="column is-3">
                <button className="button icon-text mt-6 ml-6" onClick={() => history.goBack()}>
                    <span className="icon">
                            <i className="fas fa-solid fa-angle-left"></i>
                        </span>
                    <span>Back</span>
                </button>
            </div>
            <div className="column is-8 is-offset-1">
                <div id="current-emotion-name" className="block">Fear</div>

                <div>
                    <span className="time-picker">
                        <label htmlFor="start-time"><strong>Started at </strong>
                            <input id="start-time" className="time-picker" type="time"></input>
                        </label>
                    </span>

                    <span className="block ml-6">
                        <label htmlFor="end-time"><strong>Ended at </strong>
                            <input id="end-time" className="time-picker" type="time"></input>
                        </label>
                    </span>
                </div>

                <div className="field mt-3">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Add description here..."></textarea>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Reason</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Add reason here..."></textarea>
                    </div>
                </div>
                <SolutionSection/>
                <button className="button red-button" onClick={() => handleSaveClick()}>Save</button>
            </div>
        </div>
    )
}