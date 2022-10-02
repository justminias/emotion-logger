import {ADD_EMOTION_LOG, GET_USER_EMOTION_LOGS} from '../actions/emotionLogActions'

const emotionsLogs = [
    {
        id: 'emo1',
        name: "Fear",
        startTime: "12:30",
        endTime: "16:00",
        description: "Description for fear",
        reason: "Reason of fear",
        solutions: ["Music"],
        date: "2022-09-02"
    },
    {
        id: 'emo2',
        name: "Greed",
        startTime: "08:30",
        endTime: "11:00",
        description: "Description of greed",
        reason: "Reason of greed",
        solutions: ["Music"],
        date: "2022-09-02"
    },
    {
        id: 'emo3',
        name: "Excitement",
        startTime: "16:30",
        endTime: "17:00",
        description: "Description of excitement",
        reason: "Reason of excitement",
        solutions: ["Music"],
        date: "2022-09-02"
    },
    {
        id: 'emo4',
        name: "Sadness",
        startTime: "12:30",
        endTime: "16:00",
        description: "Description of sadness",
        reason: "Reason of sadness",
        solutions: ["Music"],
        date: "2022-09-01"
    },
    {
        id: 'emo5',
        name: "Depression",
        startTime: "21:30",
        endTime: "23:00",
        description: "Description of depression",
        reason: "Reason of depression",
        solutions: ["Music"],
        date: "2022-09-01"
    }
]

const emotionLogsReducer = (state = emotionsLogs, action) => {
    switch (action.type) {
        case GET_USER_EMOTION_LOGS: {
            return state;
        }
        case ADD_EMOTION_LOG: {
            return [...state, action.payload];
        }
        default:
            return state;
    }
}

export default emotionLogsReducer;