import {mondayPicks, predictionColumns, saturdayPicks, sundayPicks} from "./data/predictionData";
import {PredictionInfo} from "./predictionInfo";
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {GridCard} from "../../../../components/ui/gridCard.js";



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
                        title="Weekend Fixture Predictions"
                        content={[
                            <CustomTable columns={predictionColumns} data={saturdayPicks} date="15/01/2022"/>,
                          <CustomTable columns={predictionColumns} data={sundayPicks} date="16/01/2022"/>,
                          <CustomTable columns={predictionColumns} data={mondayPicks} date="17/01/2022"/>,
                          <PredictionInfo />
                        ]}
                        />
                    </Box>
                </Row>
              </div>
            </Grid>
          </Box>
        </Container>
    );
}