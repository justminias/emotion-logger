import './EmotionSection.css'
import {useEffect, useState} from "react";
import {DayPicker} from "react-day-picker";
import {format} from "date-fns";
import 'react-day-picker/dist/style.css';

import {changeCurrentEmotionLog, clearCurrentEmotionLog} from '../../actions/chosenLogActions';
import {useSelector, useDispatch} from "react-redux";

export const EmotionSection = () => {
    const [activeEmotionId, setActiveEmotionId] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date())
    const emotionLogs = useSelector(store => store.emotionLogs)
    const dispatch = useDispatch();

    const DATE_FORMAT = 'yyyy-MM-dd'

    const handleEmotionLogChange = (emotionLogId) => {
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
        const firstLogOnDay = emotionLogs
            .filter(emotionLog => emotionLog.date === format(selectedDate, DATE_FORMAT))
            .find(Boolean);

        firstLogOnDay === undefined
            ? dispatch(clearCurrentEmotionLog())
            : toggleEmotion(firstLogOnDay.id)
    }, [selectedDate])

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
                {
                    emotionLogs
                        .filter(emotionLog => emotionLog.date === format(selectedDate, DATE_FORMAT))
                        .map(emotionLog =>
                        <div key={emotionLog.id}
                             id={emotionLog.id}
                             className="emotion-list-item is-flex is-justify-content-space-between"
                             onClick={() => toggleEmotion(emotionLog.id)}>
                            <span>{emotionLog.name}</span>
                            <span><i className="fas fa-solid fa-angle-left"></i></span>
                        </div>)
                }
            </div>
        </>
    )
}