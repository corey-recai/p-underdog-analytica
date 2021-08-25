import Container from "react-bootstrap/Container";
import {results_aug21, results_aug22} from "../picks/latestData";
import {PicksContainer} from "../picks/picksContainer";
import React from "react";
import {PicksInfo} from "../picks/picksInfo";


export const ResultsContainer = () => {
    return (
        <Container className="home-section-3">
            <PicksContainer data={results_aug22} date="22/08/2021"/>
            <PicksContainer data={results_aug21} date="21/08/2021"/>
            <PicksInfo />
        </Container>
    );
}