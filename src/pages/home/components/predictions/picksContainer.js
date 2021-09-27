import {CustomTable} from "./customTable";
import React from "react";
import Container from "react-bootstrap/Container";
import {predictionColumns} from "./data/predictionData";


export const PicksContainer = (props) => {
    return (
        <Container className="picks-container">
            <CustomTable columns={predictionColumns} date={props.date} data={props.data}/>
        </Container>
    )
}