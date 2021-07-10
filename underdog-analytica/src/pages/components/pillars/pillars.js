import {Button, CardDeck} from "react-bootstrap";
import React, {Component} from "react";
import { Card } from "react-bootstrap";

export default class pillars extends Component {
    render() {
        return (
            <>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/140x100" />
                        <Card.Body>
                            <Card.Title>Honesty</Card.Title>
                            <Card.Text>
                                Competitors rarely make their returns clear and understandable. That's why all our bets are available for review in <span><a>BET HISTORY</a></span> before you make an account.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/140x100" />
                        <Card.Body>
                            <Card.Title>Wealth Management</Card.Title>
                            <Card.Text>
                                Sports Betting, when done by the numbers, is an investment strategy. Using efficient bankroll management, consistent monthly returns are possible… WORKSHOP.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/140x100" />
                        <Card.Body>
                            <Card.Title>Data Driven</Card.Title>
                            <Card.Text>
                                We are not your cousin’s friend who has a “good read” on the matches. We use a machine learning algorithm to generate emotionless predictions.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/140x100" />
                        <Card.Body>
                            <Card.Title>Accessibility</Card.Title>
                            <Card.Text>
                                We are priced for everyone at all ages and experience levels at 60 cents per pick on average. Who wants to use $200 of their bank roll on a picks subscription?
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </>
        );
    }
}