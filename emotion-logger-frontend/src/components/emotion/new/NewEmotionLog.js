import {SolutionSection} from "../../solution/SolutionSection";
import {useHistory} from "react-router-dom";
import "./NewEmotionLog.css";
import {saveEmotionLogThunk} from "../../../actions/emotionLogActions";
import {useDispatch, useSelector} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {useState} from "react";
import {useForm} from "react-hook-form";

export const NewEmotionLog = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, isLoading] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const chosenSolutions = useSelector(store => store.solutions.chosenSolutions)
    const selectedDate = useSelector(store => store.selectedDate);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const onSubmit = (data) => {
        setValue("chosenSolutions", chosenSolutions);
        setValue("date", selectedDate)
        dispatch(saveEmotionLogThunk(data));
    }

    return (
        <div className="columns">
            <div className="column is-2">
                <button className="button icon-text mt-6 ml-6" onClick={() => history.goBack()}>
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
                                defaultValue="08:30"
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
                                defaultValue="12:30"
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
                                {...register("reason", { required: true })}
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