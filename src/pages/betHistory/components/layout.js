import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ResultTable} from "./resultTable";
import Nav from '../../components/nav';
import {AccordionTable} from "./accordianTable";
import MyResponsiveGrid from "./responsiveGrid";


export default class Layout extends Component{
    render () {
        return (
            <>
                <Nav />
                <div className="bet-history-container pt-5">
                    <Container>
                        <Row>
                            {/*<ResultTable />*/}
                            <AccordionTable />
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}