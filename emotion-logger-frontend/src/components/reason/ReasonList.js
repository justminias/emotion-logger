import React from "react";
import ReasonElement from "./ReasonElement";
import {Button, TextField} from "@mui/material";

class ReasonList extends React.Component {
    state = {
        reasons: [],
        addReasonValue: ''
    }

    componentDidMount = () => {
        this.handleFetchReasons();
    }

    handleFetchReasons = () => {
        fetch(process.env.REACT_APP_GET_REASON_ENDPOINT)
            .then(res => res.json())
            .then(res => this.setState({
                reasons: res.reasons
            }))
            .catch(err => console.log(err))
    }

    handleDeleteReason = (id) => {
        fetch(process.env.REACT_APP_REMOVE_REASON_ENDPOINT + `/${id}`, {method: 'DELETE'})
            .then(this.handleFetchReasons)
            .catch(err => console.log(err))
    }

    handleAddReasonValueChange = (event) => {
        this.setState((prevState) => ({
            addReasonValue: event.target.value
        }))
    }

    handleAddReason = () => {
        fetch(process.env.REACT_APP_ADD_REASON_ENDPOINT,
            {
                method: 'POST',
                body: JSON.stringify({name: this.state.addReasonValue}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(this.handleFetchReasons)
            .catch(err => console.log(err))
    }

    render() {
        const reasons = this.state.reasons;

        return (
            <>
                <ul>
                    {reasons.map(reason => {
                        return <ReasonElement key={reason.id}
                                              name={reason.name}
                                              onDelete={() => this.handleDeleteReason(reason.id)}/>
                    })}
                </ul>
                <div>

                    <form onSubmit={this.handleAddReason}>
                        <TextField
                            id="newReasonInput"
                            required
                            label="New reason"
                            onChange={this.handleAddReasonValueChange}
                        />
                        <Button type="submit" variant="contained">Add reason</Button>
                    </form>
                </div>
                <div>
                    <Button variant="contained" onClick={this.handleFetchReasons}>Refresh reasons</Button>
                </div>
            </>
        )
    }
}

export default ReasonList;