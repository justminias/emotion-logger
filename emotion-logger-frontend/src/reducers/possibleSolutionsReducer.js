const possibleSolutions = [
    {id: 'sol1', name: 'Listening to music'},
    {id: 'sol2', name: 'Riding a bike'},
    {id: 'sol3', name: 'Kayaking'},
    {id: 'sol4', name: 'Meditation'},
    {id: 'sol5', name: 'Sex'},
    {id: 'sol6', name: 'Running'},
    {id: 'sol7', name: 'Workout on a gym'},
    {id: 'sol8', name: 'Yoga'},
    {id: 'sol9', name: 'House cleaning'},
    {id: 'sol10', name: 'Boxing'}
]

export const possibleSolutionsReducer = (store = possibleSolutions, action) => {
    switch (action.type) {
        default:
            return store;
    }
}