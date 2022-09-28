import {combineReducers} from 'redux';
import {emotionLogsReducer} from './emotionLogsReducer'
import {possibleSolutionsReducer} from "./possibleSolutionsReducer";
import {chosenLogReducer} from "./chosenLogReducer";

export const rootReducer = combineReducers({
    emotionLogs: emotionLogsReducer,
    possibleSolutions: possibleSolutionsReducer,
    chosenLog: chosenLogReducer,
})