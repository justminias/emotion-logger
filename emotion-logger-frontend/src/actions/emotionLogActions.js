export const ADD_EMOTION_LOG = 'ADD_EMOTION_LOG';
export const GET_USER_EMOTION_LOGS = 'GET_USER_EMOTION_LOGS';

export const addEmotionLog = ({id, name, startTime, endTime, description, reason, solutions, date}) => ({
    type: ADD_EMOTION_LOG,
    payload: {
        id,
        name,
        startTime,
        endTime,
        description,
        reason,
        solutions,
        date,
    }
});