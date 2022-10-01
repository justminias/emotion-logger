import {SolutionSection} from "../../solution/SolutionSection";
import {useHistory} from "react-router-dom";

export const NewEmotionLog = () => {

    const history = useHistory();

    return (
        <div className="columns">
            <div className="column is-3">
                <button className="button blue-button" onClick={() => history.goBack()}>Back</button>
            </div>
            <div className="column is-8 is-offset-1">
                <div id="current-emotion-name" className="block">Fear</div>

                <span className="time-picker">
                        <label htmlFor="start-time"><strong>Started at</strong>
                            <input id="start-time" className="time-picker" type="time"></input>
                        </label>
                    </span>

                <span className="block">
                        <label htmlFor="end-time"><strong>Ended at</strong>
                            <input id="end-time" className="time-picker" type="time"></input>
                        </label>
                    </span>

                <div className="block textarea-wrapper">
                    <p><strong>Description</strong></p>
                    <textarea className="textarea" placeholder="Add description here..."></textarea>
                </div>
                <div className="block textarea-wrapper">
                    <p><strong>Reason</strong></p>
                    <textarea className="textarea" placeholder="Add reason here..."></textarea>
                </div>
                <SolutionSection />
            </div>
        </div>
    )
}