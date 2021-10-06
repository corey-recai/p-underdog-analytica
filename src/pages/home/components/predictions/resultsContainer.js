import Container from "react-bootstrap/Container";
import React from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, saturdayResults, sundayResults} from "./data/resultData";


export const ResultsContainer = () => {
    return (
        <Container className="home-section-2">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <CustomTable columns={resultColumns} data={saturdayResults} date="2/10/2021"/>
            <CustomTable columns={resultColumns} data={sundayResults} date="3/10/2021"/>
            <PredictionInfo />
        </Container>
    );
}