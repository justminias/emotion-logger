import {CHANGE_CURRENT_EMOTION_LOG, CLEAR_CURRENT_EMOTION_LOG} from '../actions/chosenLogActions'

const chosenLogReducer = (state = null, action) => {

    switch (action.type) {
        case CHANGE_CURRENT_EMOTION_LOG: {
            state = action.payload
            return state;
        }
        case CLEAR_CURRENT_EMOTION_LOG: {
            state = null;
            return state;
        }
        default:
            return state;
    }
}

export default chosenLogReducer;