import React, {useContext} from "react";
import {Box, Grid, Grommet, grommet, Heading, ResponsiveContext} from "grommet";
import {HighlightCard} from "./highlightCard";


export const HighlightGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Grommet theme={grommet}>
            <Box>
                <Heading textAlign="center" margin="small">Top Earners of the Week</Heading>
            </Box>
            <Box pad="medium">
                <Grid
                    columns={size !== 'small' ? 'small' : '100%'}
                    gap="small"
                >
                <HighlightCard
                    country="England League One"
                    matchup="Sheffield Wednesday @ Rotherham"
                    odds="3.42"
                    unitsWon="2.42"
                />
                <HighlightCard
                    country="England League One"
                    matchup="Sheffield Wednesday @ Rotherham"
                    odds="3.42"
                    unitsWon="2.42"
                />
                    <HighlightCard
                        country="England League One"
                        matchup="Sheffield Wednesday @ Rotherham"
                        odds="3.42"
                        unitsWon="2.42"
                    />
                </Grid>
            </Box>
        </Grommet>

    );
}