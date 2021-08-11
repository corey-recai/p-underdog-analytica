import {WeeklyResult} from "./components/weeklyResult";
import {april16, april24} from "./data/aprilResults";
import {may14_16, may1_3, may22_23, may7_10} from "./data/mayResults";
import Nav from "../components/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import {MonthTitle} from "./components/monthTitle";


export const Results = () => {
    return (
        <>
            <Nav/>
            <div className="bet-history-container pt-5">
                <Container>
                    <Row>
                        <MonthTitle month="April 2021"/>
                        <WeeklyResult data={april16}/>
                        <WeeklyResult data={april24}/>
                    </Row>
                    <Row>
                        <MonthTitle month="May 2021"/>
                        <WeeklyResult data={may1_3}/>
                        <WeeklyResult data={may7_10}/>
                        <WeeklyResult data={may14_16}/>
                        <WeeklyResult data={may22_23}/>
                    </Row>
                </Container>
            </div>

        </>
    );
}