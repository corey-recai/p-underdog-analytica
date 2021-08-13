import {Heading, Text} from "rebass";
import React from "react";
import {Box} from "rebass";

export const Metric = (props) => {
    return (
        <Box width={1/2} p={3}
             {...props}
             sx={{
                 display: 'grid',
                 gridGap: 2,     // theme.space[3]
                 gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
             }}
        >
            <Heading className="text-center" p={3} color="background">{props.title}:  {props.content}</Heading>
        </Box>
    );
}

