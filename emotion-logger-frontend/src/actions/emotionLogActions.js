import axios from "axios";

export const EMOTION_LOG_SAVING = 'EMOTION_LOG_SAVING';
export const EMOTION_LOG_SAVED = 'EMOTION_LOG_SAVED';
export const EMOTION_LOGS_LOADING = 'EMOTION_LOGS_LOADING';
export const EMOTION_LOGS_LOADED = 'EMOTION_LOGS_LOADED';

export const emotionLogLoading = () => ({
    type: EMOTION_LOGS_LOADING
})

export const emotionLogsLoaded = (data) => ({
    type: EMOTION_LOGS_LOADED,
    payload: data.emotionLogs
})

export const emotionLogSaving = () => ({
    type: EMOTION_LOG_SAVING
})

export const emotionLogSaved = (data) => ({
    type: EMOTION_LOG_SAVED,
    payload: data
});

export const saveEmotionLogThunk = (emotionLog, setLoading, redirectFn) => (dispatch) => {
    dispatch(emotionLogSaving(emotionLog));
    console.log('EmotionLog', emotionLog)
    return axios.post('http://localhost:8080/api/emotion-log/add', emotionLog)
        .then(() => {
            dispatch(emotionLogSaved(emotionLog));
            setLoading(false);
            redirectFn();
        })
        .catch(error => {
            console.log(error)
            setLoading(false);
        });
}

export const getEmotionLogsThunk = () => (dispatch) => {
    dispatch(emotionLogLoading());
    return axios.post('http://localhost:8080/api/emotion-log', { userId: '1'})
        .then(response => response.data)
        .then(data => dispatch(emotionLogsLoaded(data)))
        .catch(error => console.log(error));
}