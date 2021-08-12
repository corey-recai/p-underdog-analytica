import React from "react";
import {Box, Flex} from "rebass";
import {Accordion} from "../../../../components/tables/accordion";
import {may, prodCols} from "./data";

export const Picks = () => {
    return (
        <Flex mx={-2}>
            <Box width={1}>
                <Accordion data={may} columns={prodCols}/>
            </Box>
        </Flex>
    );
}