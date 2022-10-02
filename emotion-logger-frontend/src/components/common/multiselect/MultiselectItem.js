import React, { useState } from "react";
import './MultiselectItem.module.css';
import {useDispatch} from "react-redux";
import {toggleChosenSolution} from "../../../actions/solutionsActions";


const MultiselectItem = ({solution}) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (_solution) => {
        const newValue = !checked;
        setChecked(newValue);
        dispatch(toggleChosenSolution(_solution));
    }

    return (
        <div id={solution.id} onClick={() => handleClick(solution)} className="dropdown-item multiselect-item">
            <label htmlFor={solution.id} className="checkbox">
                <input type="checkbox" checked={checked} readOnly />
                 {solution.name}
            </label>
        </div>
    )
}

export default MultiselectItem;