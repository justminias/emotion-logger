import './ChosenSolutions.module.css';

const ChosenSolutions = ({solutions}) => {

    return (
        <div id="chosen-solutions" className="buttons">
            {solutions.map(solution => (<button key={solution.id} className="button">{solution.name}</button>))}
        </div>
    )
}

export default ChosenSolutions;