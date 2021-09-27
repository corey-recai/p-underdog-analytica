import {PicksTable} from "./picksTable";
import React from "react";
import Container from "react-bootstrap/Container";
import {predictionColumns} from "./predictionData";


export const PicksContainer = (props) => {
    return (
        <Container className="picks-container">
            <PicksTable columns={predictionColumns} date={props.date} data={props.data}/>
        </Container>
    )
}