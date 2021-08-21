import {WeeklyResult} from "./components/weeklyResult";
import {april16, april24} from "./data/aprilResults";
import {may14_16, may1_3, may22_23, may7_10} from "./data/mayResults";
import Nav from "../components/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import {MonthTitle} from "./components/monthTitle";
import {Helmet} from "react-helmet";


export const Results = () => {
    return (
        <>
            <Helmet>
                <title>Underdog Analytica | Home</title>
                <link rel="stylesheet"></link>
            </Helmet>
            <Nav/>
            <div className="bet-history-container pt-5">
                <Container>
                    <Row>
                        <MonthTitle month="May 2021"/>
                        <WeeklyResult data={may22_23}/>
                        <WeeklyResult data={may14_16}/>
                        <WeeklyResult data={may7_10}/>
                        <WeeklyResult data={may1_3}/>
                    </Row>
                    <Row>
                        <MonthTitle month="April 2021"/>
                        <WeeklyResult data={april24}/>
                        <WeeklyResult data={april16}/>
                    </Row>
                </Container>
            </div>

        </>
    );
}