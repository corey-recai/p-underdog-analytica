import {Box, Tab} from "grommet";
import React from "react";
import {Accordion} from "../tables/accordion";
import {leagueColumns} from "../../pages/home/components/picks/data";

export const CustomTab = (props) => {
    return (
        <>
            <Tab title={props.title}>
                <Box m={-1} p={1} flex='grow'>
                    <Accordion data={ props.data } columns={leagueColumns}/>
                </Box>
            </Tab>
        </>
    )
}