import Container from "react-bootstrap/Container";
import {PicksContainer} from "./picksContainer";
import React from "react";
import {PicksInfo} from "./picksInfo";
import {Box, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {latest_results} from "./data";
import {PicksTable} from "./picksTable";
import {columns} from "../../../betHistory/data/tableConfig";

export const ResultsContainer = () => {
    return (
        <Container className="home-section-2">
            <Row>
                <Box gridArea="header">
                    <Heading textAlign="center" margin="small" ccolor="#2383cc">Last Weeks Results & Details</Heading>
                </Box>
            </Row>
            <PicksTable data={latest_results} columns={columns} date="September 25-27, 2021"/>
            <PicksInfo />
        </Container>
    );
}