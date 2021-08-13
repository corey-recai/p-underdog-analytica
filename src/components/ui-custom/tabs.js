import React, {Component} from 'react';
import { Tabs, } from 'grommet';
import {CustomTab} from "./customTab";
import {bundesliga, liga, EPL, ligue1} from "../../pages/home/components/picks/data";

export const CustomTabs = () => {
        return (
            <Tabs height='medium' flex='grow' alignSelf='center'>
                <CustomTab title="Bundesliga" data={bundesliga}/>
                <CustomTab title="Liga" data={liga}/>
                <CustomTab title="League 1" data={ligue1}/>
                <CustomTab title="Premier League" data={EPL}/>
            </Tabs>
        )
}
