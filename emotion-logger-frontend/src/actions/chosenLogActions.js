export const CHANGE_CURRENT_EMOTION_LOG = 'CHANGE_CURRENT_EMOTION_LOG';
export const CLEAR_CURRENT_EMOTION_LOG = 'CLEAR_CURRENT_EMOTION_LOG';

export const changeCurrentEmotionLog = (currentEmotionLog) => ({
    type: CHANGE_CURRENT_EMOTION_LOG,
    payload: {
        currentEmotionLog
    }
});

export const clearCurrentEmotionLog = () => ({
    type: CLEAR_CURRENT_EMOTION_LOG
})