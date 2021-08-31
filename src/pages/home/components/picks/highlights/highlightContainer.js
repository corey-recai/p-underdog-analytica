import React from 'react';
import {Box, Grid, Heading} from "grommet";
import {HighlightCard} from "./highlightCard";


export const HighlightContainer = () => {
    return(
        <Grid
            rows={['xsmall', 'small', 'small']}
            columns={['small', 'small', 'small']}
            gap="small"
            areas={[
                { name: 'header', start: [0, 0], end: [2, 0] },
                { name: 'second1', start: [0,1], end: [1, 1] },
                { name: 'second2', start: [1, 1], end: [1, 1] },
                { name: 'second3', start: [2, 1], end: [2, 1] },
                { name: 'third1', start: [0,2], end: [1, 2] },
                { name: 'third2', start: [1, 2], end: [1, 2] },
                { name: 'third3', start: [2, 2], end: [2, 2] },
            ]}
        >
            <Box gridArea="header">
                <Heading textAlign="center" margin="small">Top Earners of the Week</Heading>
            </Box>
            <HighlightCard
                gridArea="second1"
                country="England League One"
                matchup="Sheffield Wednesday @ Rotherham"
                odds="3.42"
                unitsWon="2.42"
            />
            <HighlightCard grideArea="second2" />
            <HighlightCard grideArea="second3" />
            <HighlightCard grideArea="third1" />
            <HighlightCard grideArea="third2" />
            <HighlightCard grideArea="third3" />
        </Grid>
    );
}