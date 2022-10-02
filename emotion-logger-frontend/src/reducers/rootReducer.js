import {combineReducers} from 'redux';
import emotionLogsReducer from './emotionLogsReducer'
import solutionsReducer from "./solutionsReducer";
import chosenLogReducer from "./chosenLogReducer";

export const rootReducer = combineReducers({
    emotionLogs: emotionLogsReducer,
    solutions: solutionsReducer,
    chosenLog: chosenLogReducer,
})