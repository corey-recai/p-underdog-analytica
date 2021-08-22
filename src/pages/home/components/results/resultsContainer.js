import Container from "react-bootstrap/Container";
import {aug21} from "../picks/latestData";
import {PicksContainer} from "../picks/picksContainer";
import React from "react";


export const ResultsContainer = (props) => {
    return (
        <Container className="home-section-3">
            <PicksContainer data={aug21} date="21/08/2021"/>
        </Container>
    );
}