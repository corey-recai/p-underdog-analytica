import { predictionColumns } from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {GridCard} from "../../../../components/ui/gridCard.js";

// Build the needed tables with the current week's predictions
const predictions = require('./data/predictions.json');
var dates = Object.keys(predictions);
var tables = [];
for (let i = 0; i < dates.length; i++) {
  tables.push(<CustomTable columns={predictionColumns} data={predictions[dates[i]]} date={dates[i]}/>)
}

export const DisplayContainer = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
          <Box pad="xsmall">
            <Grid gap="small" columns={[size]} alignContent="center">
              <div className="center">
                <Row>
                    <Box>
                      <GridCard
                        title="Upcoming Recommendations"
                        content={[tables, <PredictionInfo/>]}
                        />
                    </Box>
                </Row>
              </div>
            </Grid>
          </Box>
        </Container>
    );
}