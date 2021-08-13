import React from "react";
import {Box} from "rebass";
import {Accordion} from "../../../../components/tables/accordion";
import {may, columns} from "./data";

export const Picks = () => {
    return (
        <>
            <Box>
                <Accordion data={ may } columns={ columns }/>
            </Box>
        </>
    );
}