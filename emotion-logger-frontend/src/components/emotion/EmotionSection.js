import './EmotionSection.css'
import {useEffect, useState} from "react";
import {DayPicker} from "react-day-picker";
import 'react-day-picker/dist/style.css';

import {changeCurrentEmotionLog, clearCurrentEmotionLog} from '../../actions/chosenLogActions';
import {useSelector, useDispatch} from "react-redux";
import {getEmotionLogsThunk} from "../../actions/emotionLogActions";
import ArrayUtil from "../../utils/ArrayUtil";

export const EmotionSection = () => {
    const [activeEmotionId, setActiveEmotionId] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date())
    const emotionLogs = useSelector(store => store.emotionLogs.emotionLogs)
    console.log(emotionLogs);
    const dispatch = useDispatch();

    const handleEmotionLogChange = (emotionLogId) => {
        console.log(emotionLogId)
        dispatch(changeCurrentEmotionLog(emotionLogs.find(emotionLog => emotionLog.id === emotionLogId)));
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
        dispatch(getEmotionLogsThunk())
        const firstLogOnDay = emotionLogs
            .filter(emotionLog => ArrayUtil.equals(emotionLog.date, dateToArray(selectedDate)))
            .find(Boolean);

        firstLogOnDay === undefined
            ? dispatch(clearCurrentEmotionLog())
            : toggleEmotion(firstLogOnDay.id)
    }, [selectedDate])

    const dateToArray = (date) => [date.getFullYear(), date.getMonth()+1, date.getDate()];

    return (
        <>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                weekStartsOn={1}
                required={true}
            />
            <div className="emotion-list">
                {   emotionLogs &&
                    emotionLogs
                        .filter(emotionLog => ArrayUtil.equals(emotionLog.date, dateToArray(selectedDate)))
                        .map(emotionLog =>
                        <div key={emotionLog.id}
                             id={emotionLog.id}
                             className="emotion-list-item is-flex is-justify-content-space-between"
                             onClick={() => toggleEmotion(emotionLog.id)}>
                            <span>{emotionLog.emotionName}</span>
                            <span><i className="fas fa-solid fa-angle-left"></i></span>
                        </div>)
                }
            </div>
        </>
    )
}