import {CHANGE_SELECTED_DATE} from '../actions/selectedDateActions'

const selectedDateReducer = (state = new Date(), action) => {

    switch (action.type) {
        case CHANGE_SELECTED_DATE: {
            state = action.payload.date
            return state;
        }
        default:
            return state;
    }
}

export default selectedDateReducer;