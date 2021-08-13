import {Heading, Text, Box} from "rebass";
import React from "react";

export const Metric = (props) => {
    return (
        <>
            <Box width={1/3}>
            <Heading className="text-center" color="background">{props.title}</Heading>
            <Text color='background' bg='primary' fontSize={4} className="text-center">
                {props.content}
            </Text>
            </Box>
        </>
    );
}

