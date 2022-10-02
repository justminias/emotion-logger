import './ChosenSolutions.module.css';
import {useSelector} from "react-redux";

const ChosenSolutions = () => {

    const solutions = useSelector(state => state.solutions.chosenSolutions);

    return (
        <div id="chosen-solutions" className="buttons">
            {   solutions &&
                solutions.map(solution => (
                    <button key={solution.id}
                            className="button">{solution.name}
                    </button>))}
        </div>
    )
}

export default ChosenSolutions;