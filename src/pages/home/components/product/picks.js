import React from "react";
import {Box, Flex, Text} from "rebass";
import {AccordionTable} from "../../../betHistory/components/accordianTable";

export const Picks = () => {
    return (
        <Flex mx={-2}>
            <Box width={1} px={2} py={2}>
                <Text p={1} color='background' bg='primary'>
                    <AccordionTable />
                </Text>
            </Box>
        </Flex>
    );
}