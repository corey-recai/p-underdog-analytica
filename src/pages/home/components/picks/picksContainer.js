import {PicksTable} from "./picksTable";
import React from "react";
import Container from "react-bootstrap/Container";


export const PicksContainer = (props) => {
    return (
        <Container className="picks-container">
            <PicksTable date={props.date} data={props.data}/>
        </Container>

    )
}
