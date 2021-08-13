import React, {Component} from "react";
import {Metrics} from "./metrics";
import {Flex} from "rebass";
import {Picks} from "./picks";
import {
    Container
} from "react-bootstrap";


export default class DisplayContainer extends Component {
    render() {
        return (
            <Container>
                    <Flex>
                        <Picks />
                    </Flex>
                    <Flex>
                        <Metrics />
                    </Flex>
            </Container>
        );
    }
}