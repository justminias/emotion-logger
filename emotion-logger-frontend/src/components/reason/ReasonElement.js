import {Button} from "@mui/material";

const ReasonElement = (props) => {
    return (
        <div>
            <li key={props.id}>{props.name}</li>
            <Button onClick={props.onDelete}>Delete</Button>
        </div>
    )
}

export default ReasonElement;