export const CHANGE_CURRENT_EMOTION_LOG = 'CHANGE_CURRENT_EMOTION_LOG';
export const CLEAR_CURRENT_EMOTION_LOG = 'CLEAR_CURRENT_EMOTION_LOG';

export const changeCurrentEmotionLog = ({id, name, startTime, endTime, description, reason, solutions, date}) => ({
    type: CHANGE_CURRENT_EMOTION_LOG,
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

export const clearCurrentEmotionLog = () => ({
    type: CLEAR_CURRENT_EMOTION_LOG
})