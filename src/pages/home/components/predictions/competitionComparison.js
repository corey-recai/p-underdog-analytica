import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import {PredictionInfo} from "./predictionInfo";
import {Box, Grid, ResponsiveContext, Heading} from "grommet";
import {Row} from "react-bootstrap";
import {CustomTable} from "./customTable";
import {resultColumns, saturdayResults, sundayResults} from "./data/resultData";
import {GridCard} from "../../../../components/ui/gridCard.js";
import CompetitionComparison from "../competitors/competitionComparison";


export const CompetitionComparisonTable = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
          <Box pad="xsmall">
            <Grid gap="small" columns={[size]} alignContent="center">
              <div class="center">
                <Row>
                    <Box>
                      <GridCard
                        title="Competition Comparison"
                        content={
                          [<CompetitionComparison />]
                        }
                        />
                    </Box>
                </Row>
              </div>
            </Grid>
          </Box>
        </Container>
    );
}
