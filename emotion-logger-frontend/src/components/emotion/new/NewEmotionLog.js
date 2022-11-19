import {SolutionSection} from "../../solution/SolutionSection";
import {redirect, useNavigate} from "react-router-dom";
import "./NewEmotionLog.css";
import {saveEmotionLogThunk} from "../../../actions/emotionLogActions";
import {useDispatch, useSelector} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import SelectedDateContext from "../../../contexts/SelectedDateContext";
import moment from "moment";

export const NewEmotionLog = ({emotionLog}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // loader flag
    const { register, handleSubmit } = useForm();
    const chosenSolutionIds = useSelector(store => store.solutions.chosenSolutions.map(e => e.id))
    const [submitRequested, setSubmitRequested] = useState(false); // need for not everytime sending submit request

    const { date } = useContext(SelectedDateContext);
    const navigate = useNavigate();

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


    const onSubmit = ({emotion, startTime, endTime, description, reason}) => {
        const formattedDate = moment(date).format('YYYY-MM-DD')  // to fix problems with converting js date to java LocalDate via axios

        if (submitRequested) {
            setLoading(true);
            dispatch(saveEmotionLogThunk({
                emotion: emotion,
                startTime: startTime,
                endTime: endTime,
                description: description,
                reason: reason,
                chosenSolutionIds: chosenSolutionIds,
                date: formattedDate
            }, setLoading, () => navigate("/main")));
        }
        setSubmitRequested(false);
    };

    return (
        <div className="columns">
            <div className="column is-2">
                <button className="button icon-text mt-6 ml-6" onClick={() => navigate(-1)}>
                    <span className="icon">
                            <i className="fas fa-solid fa-angle-left"></i>
                        </span>
                    <span>Back</span>
                </button>
            </div>
            <div className="column is-7 is-offset-1">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div id="current-emotion-name" className="block mt-4">
                        <label htmlFor="emotion"><strong>Emotion: </strong></label>
                            <input
                                className="input mt-2"
                                type="text"
                                placeholder="Type your emotion here..."
                                defaultValue={emotionLog?.emotion}
                                {...register("emotion", { required: true })}
                            />
                        </div>
                    <div>
                    <span className="time-picker">
                        <label htmlFor="start-time"><strong>Started at </strong>
                            <input
                                id="start-time"
                                className="time-picker"
                                type="time"
                                defaultValue={ emotionLog !== undefined ? emotionLog.startTime : "08:30" }
                                {...register("startTime", { required: true })}
                            />
                        </label>
                    </span>

                        <span className="block ml-6">
                        <label htmlFor="end-time"><strong>Ended at </strong>
                            <input
                                id="end-time"
                                className="time-picker"
                                type="time"
                                defaultValue={ emotionLog !== undefined ? emotionLog.startTime : "12:30" }
                                {...register("endTime", { required: true })}
                            />
                        </label>
                        </span>
                    </div>

                    <div className="field mt-5">
                        <label className="label">Description:</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Add description here..."
                                defaultValue={emotionLog?.description}
                                {...register("description", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="field mt-5 mb-5">
                        <label className="label">Reason:</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Add reason here..."
                                defaultValue={emotionLog?.reason}
                                {...register("reason", { required: true })}
                            />
                        </div>
                    </div>

                    <SolutionSection/>

                    <input
                        type="submit"
                        onClick={() => setSubmitRequested(true)}
                        className="button red-button"
                        value="Save"
                    />
                    <ClipLoader loading={loading} cssOverride={override} size={150}/>
                </form>
            </div>
        </div>
    )
}