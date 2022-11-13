import {createContext, useState} from "react";

const SelectedDateContext = createContext({});

export function SelectedDateProvider({ children }) {
    const [date, setDate] = useState(new Date());

    const changeDate = (date) => {
        setDate(date);
    }

    return (
        <SelectedDateContext.Provider value={{ date, changeDate }}>
            { children }
        </SelectedDateContext.Provider>
    );
}


export default SelectedDateContext;