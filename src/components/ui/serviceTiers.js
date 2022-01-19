import React, {useContext} from "react";
import {Box, Grid, ResponsiveContext, Text, Row} from "grommet";
import Container from "react-bootstrap/Container";
import {ValuePropCard} from "./valuePropCard";
import {GridCard} from "./gridCard";
import homeIcons from "../../pages/home/icons/homeIcons";
import Button from "react-bootstrap/Button";

export const ServiceTiers = () => {
    const size = useContext(ResponsiveContext)
    return (

        <Container>
            <Box pad="small">
                <Grid gap="small" columns={[size]}>
                    <div className="center">
                        <GridCard title="Handicapping Service Tiers"
                                  content={[<Text size="large" textAlign="center">"Handicapping" is the term for selling sports betting
                                  predictions</Text>,
                            <Container>
                                <Box pad="xsmall">
                                    <Grid
                                        pad='medium'
                                        rows={[size, size, size]}
                                        columns={['medium']}
                                        gap="small"
                                        areas={[
                                            {
                                            name: 'first', start: [0,0], end: [0,1],
                                            name: 'second', start: [0,1], end: [0,2],
                                            name: 'third', start: [0,2], end: [0,3]
                                            }
                                        ]}
                                    >
                                    
                                        <Box gridArea='first' />
                                        <div id="new-bettor-tier" className="home-section-4-tier px-5">
                                            <h1 className="pt-4 bold home-section-4-title">New Bettor</h1>
                                            <h1 className="bold pt-4 home-section-4-pricing">Free</h1>
                                            <hr className="home-section-4-separator" />
                                            <p className="home-section-4-text text-start pt-4 mx-auto">
                                                <span className="highlight">
                                                    Best for beginner betting:
                                                </span>
                                                <br />
                                                Develop sports betting experience and determine your unit
                                                size with free picks and educational resources
                                                <ul className="custom-bullet">
                                                    <li>
                                                        Data-driven, machine learning algorithm generated
                                                        predictions
                                                    </li>
                                                    <li>Transparent results in real time</li>
                                                    <li>Empathetic customer service</li>
                                                    <li>
                                                        Automated email/Twitter notifications when Bet Board
                                                        updates
                                                    </li>
                                                    <li>Educational resources and articles</li>
                                                    <li>33% of match predictions</li>
                                                </ul>
                                            </p>

                                            <div className="bottom text-center py-4">
                                                <Button
                                                    className="home-section-4-signup-btn bold px-5 py-3"
                                                    size="lg"
                                                >
                                                    <a href="#" className="text-white">Bet Smarter</a>
                                                </Button>
                                            </div>
                                        </div>

                                        

                                        <Box gridArea='second' />
                                        <div id="sharp-player-tier" className="home-section-4-tier px-5">
                                            <div className="home-section-4-coming-soon-cover">
                                                <span className="home-section-4-coming-soon-text">
                                                    Coming Soon
                                                </span>
                                            </div>
                                            <h1 className="pt-4 bold home-section-4-title">
                                                Sharp Player
                                            </h1>
                                            <h1 className="bold pt-4 home-section-4-pricing">
                                                &euro;10/month*
                                            </h1>
                                            <hr className="home-section-4-separator" />
                                            <p className="home-section-4-text pt-4">
                                                <span className="highlight">
                                                    Best for consistent betting:
                                                </span>
                                                <br />
                                                Build your bankroll with steady wagers using the entire
                                                prediction board while enjoying filtered international
                                                football blog posts
                                                <ul className="custom-bullet">
                                                    <li>
                                                        Data-driven, machine learning algorithm generated
                                                        predictions
                                                    </li>
                                                    <li>Transparent results in real time</li>
                                                    <li>Empathetic customer service</li>
                                                    <li>Automated email/Twitter notifications when board updates</li>
                                                    <li>Educational resources and articles</li>
                                                    <li>
                                                        <span className="highlight">
                                                            100% of match predictions
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="highlight">
                                                            Curated international football news feed from top bloggers
                                                        </span>
                                                    </li>
                                                </ul>
                                                <span className="red-highlight">
                                                    *25% off annual subscription
                                                </span>
                                            </p>

                                            <div className="bottom text-center py-4 ">
                                                <Button
                                                    className="home-section-4-signup-btn bold px-5 py-3"
                                                    size="lg"
                                                >
                                                    Bet Strategically
                                                </Button>
                                            </div>
                                        </div>
                                        

                                        <Box gridArea='third' />
                                        <div id="sharp-player-tier" className="home-section-4-tier px-5">
                                            <div className="home-section-4-coming-soon-cover">
                                                <span className="home-section-4-coming-soon-text">
                                                    Coming Soon
                                                </span>
                                            </div>
                                            <h1 className="pt-4 bold home-section-4-title">
                                                Sharp Player
                                            </h1>
                                            <h1 className="bold pt-4 home-section-4-pricing">
                                                &euro;10/month*
                                            </h1>
                                            <hr className="home-section-4-separator" />
                                            <p className="home-section-4-text pt-4">
                                                <span className="highlight">
                                                    Best for consistent betting:
                                                </span>
                                                <br />
                                                Build your bankroll with steady wagers using the entire
                                                prediction board while enjoying filtered international
                                                football blog posts
                                                <ul className="custom-bullet">
                                                    <li>Data-driven, machine learning algorithm generated predictions</li>
                                                    <li>Transparent results in real time</li>
                                                    <li>Empathetic customer service</li>
                                                    <li>Automated email/Twitter notifications when board updates</li>
                                                    <li>Educational resources and articles</li>
                                                    <li>
                                                        <span className="highlight">
                                                            100% of match predictions
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="highlight">
                                                            Curated international football news feed from top bloggers
                                                        </span>
                                                    </li>
                                                </ul>
                                                <span className="red-highlight">
                                                    *25% off annual subscription
                                                </span>
                                            </p>

                                            <div className="bottom text-center py-4 ">
                                                <Button
                                                    className="home-section-4-signup-btn bold px-5 py-3"
                                                    size="lg"
                                                >
                                                    Bet Strategically
                                                </Button>
                                            </div>
                                        </div>
                        
                                    </Grid>
                                </Box>
                            </Container>
                            ]}
                        />
                    </div>
                </Grid>
            </Box>
        </Container>

    )
}
