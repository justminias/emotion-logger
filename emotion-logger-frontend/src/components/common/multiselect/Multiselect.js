import './Multiselect.module.css'
import MultiselectItem from "./MultiselectItem";
import {useState} from "react";
import {useSelector} from "react-redux";

export const Multiselect = () => {
    const [multiselectIconName, setMultiselectIconName] = useState('fa-angle-down')
    const [dropdownIsActiveClassname, setDropdownIsActiveClassname] = useState('')
    const possibleSolutions = useSelector(state => state.solutions.possibleSolutions);


    const handleClick = () => {
        dropdownIsActiveClassname === ''
            ? setDropdownIsActiveClassname('is-active')
            : setDropdownIsActiveClassname('')

        multiselectIconName === 'fa-angle-up'
            ? setMultiselectIconName('fa-angle-down')
            : setMultiselectIconName('fa-angle-up')
    }

    return (
        <div className={"multiselect dropdown " + dropdownIsActiveClassname}>
            <div className="dropdown-trigger">
                <button className="button" onClick={handleClick} aria-haspopup="true" aria-controls="dropdown-menu">
                    <span><strong>Solutions</strong></span>
                    <span className="icon is-small">
        <i className={"multiselect-icon fas " + multiselectIconName} aria-hidden="true"></i>
      </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {possibleSolutions &&
                        possibleSolutions.map(possibleSolution => <MultiselectItem
                            key={possibleSolution.id}
                            solution={possibleSolution}/>)}
                </div>
            </div>
        </div>
    );
}