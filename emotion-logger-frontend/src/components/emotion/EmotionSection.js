import './EmotionSection.css'
import {useContext, useEffect, useState} from "react";
import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';

import {changeCurrentEmotionLog, clearCurrentEmotionLog} from '../../actions/chosenLogActions';
import {useSelector, useDispatch} from "react-redux";
import {getEmotionLogsThunk} from "../../actions/emotionLogActions";
import ArrayUtil from "../../utils/ArrayUtil";
import SelectedDateContext from "../../contexts/SelectedDateContext";

export const EmotionSection = () => {
    const [activeEmotionId, setActiveEmotionId] = useState()
    const emotionLogs = useSelector(store => store.emotionLogs)

    const { date, changeDate } = useContext(SelectedDateContext);

    const dispatch = useDispatch();

    const handleEmotionLogChange = (emotionLogId) => {
        dispatch(changeCurrentEmotionLog(emotionLogs.data.find(emotionLog => emotionLog.id === emotionLogId)));
    }

    const toggleEmotion = (emotionLogId) => {
        if (activeEmotionId !== undefined && document.getElementById(activeEmotionId)) {
            document.getElementById(activeEmotionId).classList.remove('active-emotion')
        }
        document.getElementById(emotionLogId).classList.add('active-emotion')
        setActiveEmotionId(emotionLogId)
        handleEmotionLogChange(emotionLogId)
    }

    useEffect(() => {
        console.log('date', date);
        dispatch(getEmotionLogsThunk())
        const firstLogOnDay = emotionLogs.data
            .filter(emotionLog => ArrayUtil.equals(emotionLog.date, dateToArray(date)))
            .find(Boolean);

        firstLogOnDay === undefined
            ? dispatch(clearCurrentEmotionLog())
            : toggleEmotion(firstLogOnDay.id)
    }, [date])

    const dateToArray = (date) => [date.getFullYear(), date.getMonth()+1, date.getDate()];

    return (
        <>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={changeDate}
                weekStartsOn={1}
                required={true}
            />
            <div className="emotion-list">
                {   emotionLogs &&
                    emotionLogs.data
                        .filter(emotionLog => {
                            return ArrayUtil.equals(emotionLog.date, dateToArray(date))
                        })
                        .map(emotionLog =>
                        <div key={emotionLog.id}
                             id={emotionLog.id}
                             className="emotion-list-item is-flex is-justify-content-space-between"
                             onClick={() => {
                                 toggleEmotion(emotionLog.id)
                                 console.log(emotionLog)
                             }}>
                            <span>{emotionLog.emotion}</span>
                            <span><i className="fas fa-solid fa-angle-left"></i></span>
                        </div>)
                }
            </div>
        </>
    )
}