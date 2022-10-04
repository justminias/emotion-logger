import {SolutionSection} from "../../solution/SolutionSection";
import {useHistory} from "react-router-dom";
import "./NewEmotionLog.css";
import {saveEmotionLogThunk} from "../../../actions/emotionLogActions";
import {useDispatch} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {useState} from "react";

export const NewEmotionLog = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, isLoading] = useState(false);
    const [formInput, setFormInput] = useState({startTime: '08:30', endTime: '10:00', reason: '', description: ''});

    const handleSubmit = (event) => {
        dispatch(saveEmotionLogThunk(formInput));
    }

    const handleInputChange = (event) => {
        console.log("Event: ", event)
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })
    }

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

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
                <form onSubmit={handleSubmit}>
                    <div id="current-emotion-name" className="block">Fear</div>

                    <div>
                    <span className="time-picker">
                        <label htmlFor="start-time"><strong>Started at </strong>
                            <input
                                id="start-time"
                                name="startTime"
                                className="time-picker"
                                type="time"
                                value={formInput.startTime}
                                onChange={handleInputChange}
                            />
                        </label>
                    </span>

                        <span className="block ml-6">
                        <label htmlFor="end-time"><strong>Ended at </strong>
                            <input
                                id="end-time"
                                name="endTime"
                                className="time-picker"
                                type="time"
                                value={formInput.endTime}
                                onChange={handleInputChange}
                            />
                        </label>
                        </span>
                    </div>

                    <div className="field mt-3">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea
                                name="description"
                                className="textarea"
                                placeholder="Add description here..."
                                value={formInput.description}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Reason</label>
                        <div className="control">
                            <textarea
                                name="reason"
                                className="textarea"
                                placeholder="Add reason here..."
                                value={formInput.reason}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <SolutionSection/>

                    <input
                        type="submit"
                        className="button red-button"
                        value="Save"
                    />
                    <ClipLoader loading={loading} cssOverride={override} size={150}/>
                </form>
            </div>
        </div>
    )
}