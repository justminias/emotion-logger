import {Multiselect} from "../common/multiselect/Multiselect";
import ChosenSolutions from "./ChosenSolutions";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {clearChosenSolutions, getSolutionsThunk} from "../../actions/solutionsActions";

export const SolutionSection = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSolutionsThunk());

        return function cleanup() {
            dispatch(clearChosenSolutions());
        }
    }, [])

    return (
        <div className="columns">
            <div className="column is-4">
                <Multiselect/>
            </div>
            <div className="column is-8">
                <ChosenSolutions/>
            </div>
        </div>
    )
}