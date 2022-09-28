import React, { useState } from "react";
import './MultiselectItem.module.css';


const MultiselectItem = ({id, name, sendDataToParent}) => {
    const [checked, setChecked] = useState(false);

    const handleClick = (_id) => {
        const newValue = !checked;
        console.log('Id ' + _id + ' New value ' + newValue);
        setChecked(newValue);
        sendDataToParent(_id, newValue);
    }

    return (
        <div id={id} onClick={() => handleClick(id)} className="dropdown-item multiselect-item">
            <label htmlFor={id} className="checkbox">
                <input type="checkbox" checked={checked} readOnly />
                 {name}
            </label>
        </div>
    )
}

export default MultiselectItem;