import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ResultTable} from "./resultTable";
import Nav from '../../components/nav';

export default class Layout extends Component{
    render () {
        return (
            <>
                <Nav />
                <div className="bet-history-container pt-5">
                    <Container>
                        <Row>
                            <ResultTable />
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}