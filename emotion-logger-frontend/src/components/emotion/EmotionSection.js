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
    const emotionLogs = useSelector(store => store.emotionLogs)
    const [selectedDate, setSelectedDate] = useState(new Date());
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
        console.log(selectedDate);
        dispatch(getEmotionLogsThunk())
        const firstLogOnDay = emotionLogs.data
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
                    emotionLogs.data
                        .filter(emotionLog => {
                            return ArrayUtil.equals(emotionLog.date, dateToArray(selectedDate))
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