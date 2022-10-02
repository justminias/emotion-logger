import axios from "axios";

export const LOADING_SOLUTIONS = "LOADING_SOLUTIONS";
export const SOLUTIONS_LOADED = "SOLUTIONS_LOADED";
export const TOGGLE_CHOSEN_SOLUTION = "ADD_CHOSEN_SOLUTION";
export const CLEAR_CHOSEN_SOLUTIONS = "CLEAR_CHOSEN_SOLUTIONS";

export const loadingSolutions = () => ({
    type: LOADING_SOLUTIONS
})

export const solutionsLoaded = (possibleSolutions) => ({
    type: SOLUTIONS_LOADED,
    payload: {
        possibleSolutions
    }
})

export const getSolutionsThunk = () => (dispatch) => {
    dispatch(loadingSolutions());
    return axios.get('http://localhost:8080/api/solution/select')
        .then(response => response.data.solutions)
        .then(solutions => dispatch(solutionsLoaded(solutions)))
}

export const toggleChosenSolution = (solution) => ({
    type: TOGGLE_CHOSEN_SOLUTION,
    payload: {
        solution
    }
})

export const clearChosenSolutions = () => ({
    type: CLEAR_CHOSEN_SOLUTIONS
})