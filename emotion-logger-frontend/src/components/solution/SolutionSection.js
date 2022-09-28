import {Multiselect} from "../common/multiselect/Multiselect";
import ChosenSolutions from "./ChosenSolutions";
import {useState} from "react";

export const SolutionSection = ({initialSolutions}) => {
    const [possibleSolutions, setPossibleSolutions] = useState(initialSolutions)
    const [chosenSolutionIds, setChosenSolutionIds] = useState([]);

    const filterSolutions = (possibleSolutions, ids) => {
        return possibleSolutions.filter(solution => ids.includes(solution.id));
    }

    const handleSolutionActivityChange = (id) => {
        if (chosenSolutionIds.includes(id)) {
            setChosenSolutionIds(chosenSolutionIds.filter(solutionId => solutionId !== id));
            return;
        }

        setChosenSolutionIds(oldIds => [...oldIds, id])
    }


    return (
        <div className="columns">
            <div className="column is-4">
                <Multiselect onSolutionActivityChange={(solutionId) => handleSolutionActivityChange(solutionId)} possibleSolutions={possibleSolutions}/>
            </div>
            <div className="column is-8">
                <ChosenSolutions solutions={filterSolutions(possibleSolutions, chosenSolutionIds)}></ChosenSolutions>
            </div>
        </div>
    )
}