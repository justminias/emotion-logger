import {useSelector} from "react-redux";
import {redirect} from "react-router-dom";

export const ChosenEmotionLog = () => {

    const currentEmotionLog = useSelector(store => store.chosenLog)

    const printTime = ([hour, minute]) => {
        const minuteFormatted = minute < 10 ? `0${minute}` : `${minute}`;
        return `${hour}:${minuteFormatted}`;
    }

    return (
        <>
            <section id="current-emotion-name" className="block">
                        <span className="has-text-weight-bold is-size-2">
                            {currentEmotionLog.emotion}
                            </span>
                <span className="pl-6">Lasted from {printTime(currentEmotionLog.startTime)} to {printTime(currentEmotionLog.endTime)}</span>
            </section>

            <div className="block pt-6">
                <p className="has-text-weight-bold">What helped me?</p>
                <hr className="my-4"/>
                <section className="pb-4">
                    <div className="buttons">
                        {currentEmotionLog.solutions.map(solution =>
                            <div className="button blue-button">{solution}</div>
                        )}
                    </div>
                </section>
                <section className="has-text-justified">
                    {currentEmotionLog.description}
                </section>
            </div>
            <div className="block pt-4">
                <p className="has-text-weight-bold">What happened that I felt this emotion?</p>
                <hr className="my-4"/>
                <section>
                    {currentEmotionLog.reason}
                </section>
            </div>
            <div className="is-flex is-justify-content-end">
                <button onClick={() => redirect("/edit-log")} className="button icon-text gray-button">
                    <span>Edit</span>
                    <span className="icon">
                            <i className="fas fa-solid fa-pen"></i>
                        </span>
                </button>
            </div>
        </>
    )
}