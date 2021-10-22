import Container from "react-bootstrap/Container";
import React from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, saturdayResults, sundayResults} from "./data/resultData";


export const ResultsContainer = () => {
    return (
        <Container>
            <Row>
                <Box gridArea="header">
                    <Heading className="justify-content-center home-section-1-h1-text bold mx-auto" textAlign="center" margin="large" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <CustomTable columns={resultColumns} data={saturdayResults} date="16/10/2021"/>
            <CustomTable columns={resultColumns} data={sundayResults} date="17/10/2021"/>
            <PredictionInfo />
        </Container>
    );
}