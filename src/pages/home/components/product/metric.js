import {Text} from "rebass";
import React from "react";
import Box from "../../../../components/ui-custom/Box";


export const Metric = (props) => {
    return (
        <>
            <Box color="#fff" bg="tomato" width={1} px={2} py={2}>
                <h6 className="text-center">{props.title}</h6>
                <Text p={1} color='background' bg='primary' className="text-center">
                    {props.content}
                </Text>
            </Box>
        </>
    )
}

