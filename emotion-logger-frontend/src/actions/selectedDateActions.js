export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE';

export const changeSelectedDate = (date) => ({
    type: CHANGE_SELECTED_DATE,
    payload: {
        date
    }
});