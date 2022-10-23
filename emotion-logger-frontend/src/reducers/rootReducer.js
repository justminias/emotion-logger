import {combineReducers} from 'redux';
import emotionLogsReducer from './emotionLogsReducer'
import solutionsReducer from "./solutionsReducer";
import chosenLogReducer from "./chosenLogReducer";
import selectedDateReducer from "./selectedDateReducer";

export const rootReducer = combineReducers({
    emotionLogs: emotionLogsReducer,
    solutions: solutionsReducer,
    chosenLog: chosenLogReducer,
    selectedDate: selectedDateReducer,
})