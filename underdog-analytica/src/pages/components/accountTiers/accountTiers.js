import React, {Component} from "react";
import {Card, CardDeck, ListGroup} from "react-bootstrap";

export default class accountTiers extends Component {
    render() {
        return (
            <>
                <h2>Handicapping Service Tiers</h2>
                <CardDeck>

                    <Card>
                        <Card.Body>
                            <Card.Header className="text-center">Skeleton</Card.Header>
                            <ListGroup variant="list-group-flush">
                                <ListGroup.Item>5 picks a time</ListGroup.Item>
                                <ListGroup.Item>Access to sports betting educational articles.</ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                Learn how to bet on European football, manage a bankroll, and how sports Betting affects taxes (USA only).
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Header className="text-center">Starter</Card.Header>
                            <Card.Text>
                                Sports Betting, when done by the numbers, is an investment strategy. Using efficient bankroll management, consistent monthly returns are possible… WORKSHOP.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Header className="text-center">High Roller</Card.Header>
                            <Card.Text>
                                We are not your cousin’s friend who has a “good read” on the matches. We use a machine learning algorithm to generate emotionless predictions.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </>
        );
    }
}