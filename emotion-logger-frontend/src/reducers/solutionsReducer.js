import {
    TOGGLE_CHOSEN_SOLUTION,
    LOADING_SOLUTIONS,
    SOLUTIONS_LOADED, CLEAR_CHOSEN_SOLUTIONS
} from "../actions/solutionsActions";

const initialState = {
    loading: false,
    possibleSolutions: [],
    chosenSolutions: [],
}

const solutionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_SOLUTIONS: {
            return {
                ...state,
                loading: true,
            }
        }
        case SOLUTIONS_LOADED: {
            return {
                ...state,
                loading: false,
                possibleSolutions: action.payload.possibleSolutions
            }
        }
        case TOGGLE_CHOSEN_SOLUTION: {
            if (state.chosenSolutions.find(solution => solution === action.payload.solution)) {
                return {
                    ...state,
                    chosenSolutions: state.chosenSolutions.filter(solution => solution !== action.payload.solution),
                };
            }
            return {
                ...state,
                chosenSolutions: [...state.chosenSolutions, action.payload.solution],
            }
        }
        case CLEAR_CHOSEN_SOLUTIONS: {
            return {
                ...state,
                chosenSolutions: [],
            }
        }
        default:
            return state;
    }
}

export default solutionsReducer;