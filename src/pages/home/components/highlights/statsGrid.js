import {useContext} from "react";
import {Box, Grid, ResponsiveContext, Text} from "grommet";
import {StatCard} from "./statCard";
import Container from "react-bootstrap/Container";

export const StatsGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Container>
            <Box pad="xsmall">
                <Text>
                    Below you can see our most recent results. The great certainty that we have in our model gives us
                    the confidence to provide you with 100% transparent performance metrics.
                </Text>
                <Grid
                    pad='medium'
                    columns={[size]}
                    rows={[size]}
                    gap="small"
                    areas={[
                        {
                            name: 'first', start: [0, 0], end: [1, 0],
                            name: 'second', start: [0, 1], end: [1, 0],
                            name: 'third', start: [0, 2], end: [1, 0]
                        }
                    ]}
                >
                    <Box gridArea='first'/>
                    <StatCard
                        title="NET UNITS"
                        seven="-2.75"
                    />

                    <Box gridArea='second'/>
                    <StatCard
                        title="ROI"
                        seven="-31 %"
                    />

                    <Box gridArea='third'/>
                    <StatCard
                        title="WIN/LOSS %"
                        seven="22 %"
                    />
                </Grid>
            </Box>
            <Box>
                <Text>
                    * Above stats correspond to this previous weekend's results. (Updated 31/01/2022)
                </Text>
                <Text>
                    * See below for exact match results.
                </Text>
            </Box>

        </Container>
    )
}