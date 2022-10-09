import {
    EMOTION_LOG_SAVED,
    EMOTION_LOG_SAVING,
    EMOTION_LOGS_LOADED,
    EMOTION_LOGS_LOADING
} from '../actions/emotionLogActions'

const initialState = {
    emotionLogs: [],
    loading: false,
}

const emotionLogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMOTION_LOGS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case EMOTION_LOGS_LOADED: {
            return {
                ...state,
                loading: false,
                emotionLogs: action.payload,
            }
        }
        case EMOTION_LOG_SAVING: {
            return {
                ...state,
                loading: true,
            }
        }
        case EMOTION_LOG_SAVED: {
            return {
                ...state,
                loading: false,
                emotionLogs: [...state.emotionLogs, action.payload.emotionLog]
            }
        }
        default:
            return state;
    }
}

export default emotionLogsReducer;