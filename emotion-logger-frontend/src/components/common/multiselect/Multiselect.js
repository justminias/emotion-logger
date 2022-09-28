import './Multiselect.module.css'
import MultiselectItem from "./MultiselectItem";
import {useState} from "react";

export const Multiselect = ({onSolutionActivityChange, possibleSolutions}) => {

    const [solutionsAndState, getStateFromChild] = useState([]);
    const [multiselectIconName, setMultiselectIconName] = useState('fa-angle-down')
    const [dropdownIsActiveClassname, setDropdownIsActiveClassname] = useState('')

    const sendDataToParent = (id, checked) => {
        if (solutionsAndState.findIndex(s => s.id === id) === -1) {
            getStateFromChild(old => [...old, {id: id, checked: checked}]);
            onSolutionActivityChange(id)
            return;
        }

        getStateFromChild(
            solutionsAndState.map(solutionAndState => {
                if (solutionAndState.id === id) {
                    onSolutionActivityChange(id)
                    return {...solutionAndState, checked: checked}
                }
                return {...solutionAndState};
            }));
    }

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
                    {possibleSolutions.map(possibleSolution => <MultiselectItem
                        key={possibleSolution.id}
                        id={possibleSolution.id}
                        name={possibleSolution.name}
                        sendDataToParent={sendDataToParent} />)}
                </div>
            </div>
        </div>
    );
}