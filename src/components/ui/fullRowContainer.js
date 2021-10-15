import Container from "react-bootstrap/Container";
import {Box} from "grommet";
import {ResultsContainer} from "../../pages/home/components/predictions/resultsContainer";
import {predictionColumns, sunday} from "../../pages/home/components/predictions/data/predictionData";
import {CustomTable} from "../../pages/home/components/predictions/customTable";
import React from "react";

export const FullRowContainer = () => {
    return (
        <div className="row-container">
            <Container>
                <Box pad="large">
                    <CustomTable columns={predictionColumns} data={sunday} date="17/10/2021"/>
                </Box>
            </Container>
        </div>
    )
}