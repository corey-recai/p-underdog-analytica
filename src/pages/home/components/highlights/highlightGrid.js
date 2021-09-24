import React, {useContext} from "react";
import {Box, Grid, Grommet, grommet, Heading, ResponsiveContext} from "grommet";
import {HighlightCard} from "./highlightCard";


export const HighlightGrid = () => {
    const size = useContext(ResponsiveContext)
    return (
        <Grommet theme={grommet}>
            <Box>
                <Heading textAlign="center" margin="small">Weekend Statistics</Heading>
            </Box>
        </Grommet>

    );
}